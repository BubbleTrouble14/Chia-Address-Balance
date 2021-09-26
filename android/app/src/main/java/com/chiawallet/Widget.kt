package com.chiawallet

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.Context
import android.content.Intent
import android.graphics.Color
import android.view.View
import android.widget.RemoteViews
import com.chiawallet.AppWidgetConfig.SHARED_PREFS
import com.chiawallet.StorageHelper.Companion.fetchData
import com.google.gson.Gson
import kotlin.math.round


/**
 * Implementation of App Widget functionality.
 */

val URL = "https://xchscan.com/api/";
val PRICE_URL = "https://api.coingecko.com/api/v3/simple/price?ids=chia&vs_currencies=";
val currencyTypes = mutableListOf("USD", "EUR", "CAD", "GBP", "AUD", "SGD", "JPY", "INR", "MYR", "CNY", "CHF", "HKD", "BRL", "DKK", "NZD", "TRY", "THB", "TWD", "KRW", "ETH", "BTC", "ETC");

class Widget : AppWidgetProvider() {

    override fun onUpdate(context: Context, appWidgetManager: AppWidgetManager, appWidgetIds: IntArray) {
        for (appWidgetId in appWidgetIds) {

            val intent = Intent(context, Widget::class.java)
            intent.putExtra("APP_WIDGET_ID", appWidgetId);
            intent.action = AppWidgetConfig.UPDATE_CLICKED;

            val views = RemoteViews(context.packageName, R.layout.widget)
            views.setOnClickPendingIntent(R.id.widgetLayout, PendingIntent.getBroadcast(context, appWidgetId, intent, 0))

            fetchAndUpdateData(context, appWidgetManager, appWidgetId, views);
        }
    }

    override fun onReceive(context: Context?, intent: Intent?) {
        super.onReceive(context, intent)
        val appWidgetManager = AppWidgetManager.getInstance(context)

        if (context != null && intent != null) {
            if (AppWidgetConfig.UPDATE_CLICKED == intent.action) {
                val appWidgetId = intent.getIntExtra("APP_WIDGET_ID", -1)
                if (appWidgetId != -1) {
//                    Toast.makeText(context, "Clicked $appWidgetId", Toast.LENGTH_SHORT).show();
                    val views = RemoteViews(context.packageName, R.layout.widget)
                    fetchAndUpdateData(context, appWidgetManager, appWidgetId, views)

//                    views.setTextColor(R.id.textViewFiatValueWidget, Color.WHITE)
//                    appWidgetManager.updateAppWidget(appWidgetId, views)
                }
            }
        };
    }

}

fun fetchAndUpdateData(context: Context, appWidgetManager: AppWidgetManager, appWidgetId: Int, views: RemoteViews) {
    val gson = Gson()
    val prefs = context.getSharedPreferences(SHARED_PREFS, Context.MODE_PRIVATE)
    val editor = prefs.edit()

    var widgetData = gson.fromJson<WidgetData>(prefs.getString(AppWidgetConfig.SHARED_DATA + appWidgetId, "{}"), WidgetData::class.java);

//    if(widgetData.selectedImage == 4)
//    {
//        val prevOptions = appWidgetManager.getAppWidgetOptions(appWidgetId)
//        prevOptions.putInt(AppWidgetManager.OPTION_APPWIDGET_MIN_HEIGHT, 5);
//        val options = appWidgetManager.updateAppWidgetOptions(appWidgetId, prevOptions)
//    }

//    views.setTextViewText(R.id.textViewChiaValueWidget, (widgetData.xchValue).round(2).toString() + " XCH")
//    views.setTextViewText(R.id.textViewFiatValueWidget, widgetData.fiatString)

    //Fetch data from API
    widgetData = fetchData(context, widgetData)

    //Save data to localStorage
    editor.putString(AppWidgetConfig.SHARED_DATA + appWidgetId, gson.toJson(widgetData))
    editor.apply()

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
    views.setTextViewText(R.id.textViewWidgetName, widgetData.name)

    views.setViewVisibility(R.id.textViewChiaValueWidget, if (widgetData.showXCH) View.VISIBLE else View.GONE)
    views.setViewVisibility(R.id.textViewFiatValueWidget, if (widgetData.showFiat) View.VISIBLE else View.GONE)
    views.setViewVisibility(R.id.textViewWidgetName, if (widgetData.showName) View.VISIBLE else View.GONE)

    views.setTextColor(R.id.textViewFiatValueWidget, if (widgetData.isBlack) Color.BLACK else Color.WHITE)

//    Toast.makeText(context, "Successfully updated $appWidgetId ${widgetData.fiatString}", Toast.LENGTH_SHORT).show();

    appWidgetManager.updateAppWidget(appWidgetId, views)
}

fun Double.round(decimals: Int): Double {
    var multiplier = 1.0
    repeat(decimals) { multiplier *= 10 }
    return round(this * multiplier) / multiplier
}