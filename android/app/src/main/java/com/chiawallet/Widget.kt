package com.chiawallet

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.Context
import android.content.Intent
import android.graphics.Color
import android.view.View
import android.widget.RemoteViews
import android.widget.Toast
import com.chiawallet.AppWidgetConfig.SHARED_PREFS
import com.chiawallet.StorageHelper.Companion.fetchData
import com.google.gson.Gson
import com.reactnativecommunity.asyncstorage.next.Entry
import com.reactnativecommunity.asyncstorage.next.StorageModule
import kotlin.math.round


/**
 * Implementation of App Widget functionality.
 */

val URL = "https://xchscan.com/api/";
val PRICE_URL = "https://api.coingecko.com/api/v3/simple/price?ids=chia&vs_currencies=";
val currencyTypes = mutableListOf("USD", "EUR", "CAD", "GBP", "AUD", "SGD", "JPY", "INR", "MYR", "CNY", "CHF", "HKD", "BRL", "DKK", "NZD", "TRY", "THB", "TWD", "KRW", "ETH", "BTC", "ETC");

class WidgetProvider : AppWidgetProvider() {

    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        // There may be multiple widgets active, so update all of them
        for (appWidgetId in appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId)
        }
    }

    override fun onReceive(context: Context?, intent: Intent?) {
        super.onReceive(context, intent)
        if(AppWidgetManager.ACTION_APPWIDGET_UPDATE == intent!!.action)
        {
            Toast.makeText(context, "Clicked", Toast.LENGTH_SHORT).show();
        }
        else
        {
            Toast.makeText(context, "Other", Toast.LENGTH_SHORT).show();
        }
    }

    override fun onEnabled(context: Context) {
        // Enter relevant functionality for when the first widget is created
    }

    override fun onDisabled(context: Context) {
        // Enter relevant functionality for when the last widget is disabled
    }
}

internal fun updateAppWidget(context: Context, appWidgetManager: AppWidgetManager, appWidgetId: Int) {

    val gson = Gson()

    val intentSync = Intent(context, WidgetProvider::class.java)
    intentSync.action = AppWidgetManager.ACTION_APPWIDGET_UPDATE //You need to specify the action for the intent. Right now that intent is doing nothing for there is no action to be broadcasted.

    val pendingSync = PendingIntent.getBroadcast(context, 0, intentSync, PendingIntent.FLAG_UPDATE_CURRENT) //You need to specify a proper flag for the intent. Or else the intent will become deleted.

    val prefs = context.getSharedPreferences(SHARED_PREFS, Context.MODE_PRIVATE)

    var widgetData = gson.fromJson<WidgetData>(prefs.getString(AppWidgetConfig.SHARED_DATA + appWidgetId, "{}"), WidgetData::class.java);

    val views = RemoteViews(context.packageName, R.layout.widget)

    views.setOnClickPendingIntent(R.id.widgetLayout, pendingSync)

    views.setTextViewText(R.id.textViewChiaValueWidget, (widgetData.xchValue).round(2).toString() + " XCH")
    views.setTextViewText(R.id.textViewFiatValueWidget, widgetData.fiatString)

    widgetData = fetchData(context, widgetData)

    when (widgetData.selectedImage) {
        0 -> {
            views.setImageViewResource(R.id.displayImageWidget, R.drawable.boy_happy)
        }
        1 -> {
            views.setImageViewResource(R.id.displayImageWidget, R.drawable.boy_sad)
        }
        2 -> {
            views.setImageViewResource(R.id.displayImageWidget, R.drawable.girl_happy)
        }
        3 -> {
            views.setImageViewResource(R.id.displayImageWidget, R.drawable.girl_sad)
        }
        else -> {
            views.setViewVisibility(R.id.displayImageWidget, View.GONE)
        }
    }

    views.setTextViewText(R.id.textViewChiaValueWidget, (widgetData.xchValue).round(2).toString() + " XCH")
    views.setTextViewText(R.id.textViewFiatValueWidget, widgetData.fiatString)

    views.setViewVisibility(R.id.textViewChiaValueWidget, if(widgetData.showXCH) View.VISIBLE else View.GONE)
    views.setViewVisibility(R.id.textViewFiatValueWidget, if(widgetData.showFiat) View.VISIBLE else View.GONE)

    views.setTextColor(R.id.textViewFiatValueWidget, if (widgetData.isBlack) Color.BLACK else Color.WHITE)

//    runBlocking {
//        try{
////            val fetchBalanceFromAddress = Request.Builder().url(URL.plus("account/balance?address=").plus(chiaAddress[0].address)).build()
//            val fetchBalanceFromAddress = Request.Builder().url(URL.plus("account/balance?address=").plus(sharedData.addresses[0])).build()
//            val fetchChiaPrice = Request.Builder().url(PRICE_URL.plus(currencyTypes[currency!!.toInt()])).build();
//
//            val chiaBalanceResponse = client.newCall(fetchBalanceFromAddress).await()
//            val chiaPriceResponse = client.newCall(fetchChiaPrice).await()
//-
//            val jsonObject = JSONObject(chiaPriceResponse.body()!!.string());
//            val innnerObject = jsonObject.getJSONObject("chia");
//
//            val chiaBalance = gson.fromJson<Chia>(chiaBalanceResponse.body()?.string(), Chia::class.java)
//            val price = innnerObject.getDouble(currencyTypes[currency.toInt()].toLowerCase())
//
//            val format: NumberFormat = NumberFormat.getCurrencyInstance()
//            format.maximumFractionDigits = 2;
//            format.currency = Currency.getInstance(currencyTypes[currency.toInt()]);
//
//            views.setTextViewText(R.id.textViewChiaValueWidget, chiaBalance.xch.round(2).toString().plus(" XCH"))
//            views.setTextViewText(R.id.textViewFiatValueWidget, format.format(chiaBalance.xch * price).toString())
//        }catch (ex: Exception)
//        {
//        }
//    }
    appWidgetManager.updateAppWidget(appWidgetId, views)
}

suspend fun readValue(ctx: Context, keys: List<String>): List<Entry> {
    // get instance of the Storage by providing context object
    val asyncStorage = StorageModule.getStorageInstance(ctx)

    return asyncStorage.getValues(keys);
//    val views = RemoteViews(ctx.packageName, R.layout.widget)
//    views.setTextViewText(R.id.appwidget_text, entries[0].toString())
}

fun Double.round(decimals: Int): Double {
    var multiplier = 1.0
    repeat(decimals) { multiplier *= 10 }
    return round(this * multiplier) / multiplier
}