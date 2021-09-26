package com.chiawallet

import android.content.Context
import android.util.Log
import kotlinx.coroutines.runBlocking

import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import com.reactnativecommunity.asyncstorage.next.Entry
import com.reactnativecommunity.asyncstorage.next.StorageModule
import okhttp3.OkHttpClient
import okhttp3.Request
import org.json.JSONObject
import ru.gildor.coroutines.okhttp.await
import java.text.NumberFormat
import java.util.*


class StorageHelper {
    companion object {

        fun getPublicChiaAddresses(context: Context): List<ChiaAddress> {
            val gson = Gson();
            val data = runBlocking { readValue(context, listOf("addresses")) }[0].value

            val itemType = object : TypeToken<List<ChiaAddress>>() {}.type

            return gson.fromJson(data, itemType)
        }

        fun fetchData(context: Context, widgetData: WidgetData): WidgetData {
            val gson = Gson();
            val client = OkHttpClient();

            runBlocking {
//                val addressBalances = arrayListOf<Double>();
                try {
                    val currency =  readValue(context, listOf("currencyKey"))[0].value
                    var xchVal = 0.0;
                    widgetData.addresses.forEach {
                        val fetchBalanceFromAddress = Request.Builder().url(URL.plus("account/balance?address=").plus(it.address)).build()
                        val chiaBalanceResponse = client.newCall(fetchBalanceFromAddress).await()
                        val chiaBalance = gson.fromJson<Chia>(chiaBalanceResponse.body()?.string(), Chia::class.java)
                        xchVal += chiaBalance.xch;
                    }
                    widgetData.xchValue = xchVal;
                    val fetchChiaPrice = Request.Builder().url(PRICE_URL.plus(currencyTypes[currency!!.toInt()])).build();
                    val chiaPriceResponse = client.newCall(fetchChiaPrice).await()
                    val jsonObject = JSONObject(chiaPriceResponse.body()!!.string());
                    val innnerObject = jsonObject.getJSONObject("chia");

                    val price = innnerObject.getDouble(currencyTypes[currency.toInt()].toLowerCase())

                    val format: NumberFormat = NumberFormat.getCurrencyInstance()
                    format.maximumFractionDigits = 2;
                    format.currency = Currency.getInstance(currencyTypes[currency.toInt()]);

                    widgetData.fiatString = format.format(widgetData.xchValue * price)
                } catch (ex: Exception) {
                    Log.e("Error", ex.message)
                }
            }
            return widgetData;
        }


        private suspend fun readValue(ctx: Context, keys: List<String>): List<Entry> {
            val asyncStorage = StorageModule.getStorageInstance(ctx)
            return asyncStorage.getValues(keys);
        }

    }
}
