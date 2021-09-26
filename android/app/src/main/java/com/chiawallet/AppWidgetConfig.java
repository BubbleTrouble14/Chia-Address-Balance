package com.chiawallet;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatImageView;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.RemoteViews;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class AppWidgetConfig extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

    public static final String SHARED_PREFS = "prefs";
    public static final String SHARED_DATA = "sharedData";
    public static final String UPDATE_CLICKED    = "updateWidgetClick";

    private int appWidgetId = AppWidgetManager.INVALID_APPWIDGET_ID;
    private TextView textViewChiaValue, textViewFiatValue, textViewChiaAddresses, textViewName;
    private CheckBox checkBoxChia, checkBoxFiat, checkBoxShowName;
    private Spinner spinnerIcons, spinnerTextColor;
    private AppCompatImageView imageViewIcon;
    private ArrayList<Integer> selectedAddresses;
    private Button buttonSave;
    private List<ChiaAddress> addresses;
    private String name;

    private int selectedImage = 0;
    private boolean isBlack = true;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_app_widget_config);

        Intent intent = getIntent();
        Bundle extras = intent.getExtras();
        if (extras != null) {
            appWidgetId = extras.getInt(
                    AppWidgetManager.EXTRA_APPWIDGET_ID,
                    AppWidgetManager.INVALID_APPWIDGET_ID);
//            Toast.makeText(this, "" + appWidgetId, Toast.LENGTH_LONG).show();
        }

        Intent resultValue = new Intent();
        resultValue.putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId);
        setResult(RESULT_CANCELED, resultValue);

        if(appWidgetId == AppWidgetManager.INVALID_APPWIDGET_ID){
            finish();
        }

//        selectedAddresses = new ArrayList<>();

        textViewChiaValue = findViewById(R.id.textViewChiaValue);
        textViewFiatValue = findViewById(R.id.textViewFiatValue);
        textViewChiaAddresses = findViewById(R.id.textViewAddress);
        textViewName = findViewById(R.id.textViewShowName);
        checkBoxChia = findViewById(R.id.checkBoxChia);
        checkBoxFiat = findViewById(R.id.checkBoxFiat);
        checkBoxShowName = findViewById(R.id.checkBoxShowName);
        spinnerIcons = findViewById(R.id.spinnerIcon);
        spinnerTextColor = findViewById(R.id.spinnerTextColor);
        imageViewIcon = findViewById(R.id.displayImage);
        buttonSave = findViewById(R.id.buttonSave);

        ArrayAdapter<CharSequence> adapter = ArrayAdapter.createFromResource(this, R.array.icon_array, android.R.layout.simple_spinner_item);
        adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerIcons.setAdapter(adapter);
        spinnerIcons.setSelection(0);
        spinnerIcons.setOnItemSelectedListener(this);

        ArrayAdapter<CharSequence> colorAdapter = ArrayAdapter.createFromResource(this, R.array.color_array, android.R.layout.simple_spinner_item);
        colorAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinnerTextColor.setAdapter(colorAdapter);
        spinnerTextColor.setSelection(1);
        spinnerTextColor.setOnItemSelectedListener(new AdapterView.OnItemSelectedListener() {
            @Override
            public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
                isBlack = i == 0;
            }

            @Override
            public void onNothingSelected(AdapterView<?> adapterView) {

            }
        });

        checkBoxShowName.setOnClickListener((view) -> {
            if(checkBoxShowName.isChecked()){
                textViewName.setVisibility(View.VISIBLE);
            }
            else
            {
                textViewName.setVisibility(View.GONE);
            }
        });

        checkBoxChia.setOnClickListener((view) -> {
            if(checkBoxChia.isChecked()){
                textViewChiaValue.setVisibility(View.VISIBLE);
            }
            else
            {
                textViewChiaValue.setVisibility(View.GONE);
            }
        });

        checkBoxFiat.setOnClickListener((view) -> {
            if(checkBoxFiat.isChecked()){
                textViewFiatValue.setVisibility(View.VISIBLE);
            }
            else
            {
                textViewFiatValue.setVisibility(View.GONE);
            }
        });

        addresses = StorageHelper.Companion.getPublicChiaAddresses(this);

        if(addresses == null)
        {
            Toast.makeText(this, "No addresses added yet.", Toast.LENGTH_SHORT).show();
            finish();
        }
        else if(addresses.size() == 0){
            Toast.makeText(this, "No addresses added yet.", Toast.LENGTH_SHORT).show();
            finish();
        }

        String[] addressNames = new String[addresses.size()];
        boolean[] selectedNames = new boolean[addresses.size()];
        for(int i = 0; i < addresses.size(); i++) {
            addressNames[i] = addresses.get(i).title;
        }

        textViewChiaAddresses.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                AlertDialog.Builder builder = new AlertDialog.Builder(AppWidgetConfig.this);
                builder.setTitle("Chia Public Addresses");
                builder.setCancelable(false);

                builder.setMultiChoiceItems(addressNames, selectedNames, (DialogInterface.OnMultiChoiceClickListener) (dialogInterface, i, b) -> {
                    selectedNames[i] = b;
//                    if(b)
//                    {
//                        selectedAddresses.add(i);
//
////                        Collections.sort(selectedAddresses);
//                    }else
//                    {
//                        selectedAddresses.remove(i);
//                    }
                });

                builder.setPositiveButton("OK", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        StringBuilder stringBuilder = new StringBuilder();
//                        for(int j = 0; j < selectedAddresses.size(); j++)
//                        {
//                            stringBuilder.append(addressNames[selectedAddresses.get(j)]);
//
//                            if(j != selectedAddresses.size()-1)
//                            {
//                                stringBuilder.append(", ");
//                            }
//                        }

                        for(int j = 0; j < selectedNames.length; j++)
                        {
                            if(selectedNames[j]) {
                                if (!stringBuilder.toString().equals("")) {
                                    stringBuilder.append(", ");
                                }
                                stringBuilder.append(addressNames[j]);
                            }
                        }

                        textViewChiaAddresses.setText(stringBuilder.toString());
                    }
                });

//                builder.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
//                    @Override
//                    public void onClick(DialogInterface dialogInterface, int i) {
////                        for(int j = 0; j < selectedNames.length; j++)
////                        {
////                            selectedNames[j] = false;
////                            textViewChiaAddresses.setText("");
////                        }
////                        selectedAddresses.clear();
//                        dialogInterface.dismiss();
//                    }
//                });

                builder.setNeutralButton("Clear All", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        Arrays.fill(selectedNames, false);
                        textViewChiaAddresses.setText("");
//                        selectedAddresses.clear();
                    }
                });

                builder.show();
            }
        });

        buttonSave.setOnClickListener(view -> {
            selectedAddresses = new ArrayList<>();
            StringBuilder stringBuilder = new StringBuilder();

            for(int j = 0; j < selectedNames.length; j++)
            {
               if(selectedNames[j])
               {
                   selectedAddresses.add(j);
                   if (!stringBuilder.toString().equals("")) {
                       stringBuilder.append(", ");
                   }
                   stringBuilder.append(addressNames[j]);
               }
            }
//            Toast.makeText(this, "" + selectedAddresses.size(), Toast.LENGTH_SHORT).show();
            if(selectedAddresses.size() > 0)
            {
                name = stringBuilder.toString();
                confirmConfig(view);
            }
            else
            {
                Toast.makeText(this, "No addresses selected", Toast.LENGTH_SHORT).show();
            }
        });
    }

    public void confirmConfig(View view){
        AppWidgetManager appWidgetManager = AppWidgetManager.getInstance(this);

        Intent intent = new Intent(this, Widget.class);
        intent.putExtra("APP_WIDGET_ID", appWidgetId);
        intent.setAction(UPDATE_CLICKED);

        WidgetData widgetData = new WidgetData();
        List<ChiaAddress> saveAddresses = new ArrayList<>();
        for(int i = 0; i < selectedAddresses.size(); i++)
        {
            saveAddresses.add(addresses.get(selectedAddresses.get(i)));
        }
        widgetData.addresses = saveAddresses;
        widgetData.selectedImage = selectedImage;
        widgetData.showFiat = checkBoxFiat.isChecked();
        widgetData.showXCH = checkBoxChia.isChecked();
        widgetData.showName = checkBoxShowName.isChecked();
        widgetData.name = name;
        widgetData.isBlack = isBlack;

        widgetData = StorageHelper.Companion.fetchData(this, widgetData);

        RemoteViews views = new RemoteViews(this.getPackageName(), R.layout.widget);

        views.setOnClickPendingIntent(R.id.widgetLayout,  PendingIntent.getBroadcast(this, appWidgetId, intent, 0));

        switch (widgetData.selectedImage){
            case 0: {
                views.setImageViewResource(R.id.displayImageWidget, R.drawable.boy_happy);
                break;
            }
            case 1: {
                views.setImageViewResource(R.id.displayImageWidget, R.drawable.boy_sad);
                break;
            }
            case 2: {
                views.setImageViewResource(R.id.displayImageWidget, R.drawable.girl_happy);
                break;
            }
            case 3: {
                views.setImageViewResource(R.id.displayImageWidget, R.drawable.girl_sad);
                break;
            }
            default: {
                views.setViewVisibility(R.id.displayImageWidget, View.GONE);
            }
        }

        views.setTextViewText(R.id.textViewChiaValueWidget, (Math.round(widgetData.xchValue * 100.0) / 100.0) + " XCH");
        views.setTextViewText(R.id.textViewFiatValueWidget, widgetData.fiatString);
        views.setTextViewText(R.id.textViewWidgetName, widgetData.name);

        views.setViewVisibility(R.id.textViewChiaValueWidget, widgetData.showXCH ? View.VISIBLE : View.GONE);
        views.setViewVisibility(R.id.textViewFiatValueWidget, widgetData.showFiat ? View.VISIBLE : View.GONE);
        views.setViewVisibility(R.id.textViewWidgetName, widgetData.showName ? View.VISIBLE : View.GONE);

        views.setTextColor(R.id.textViewFiatValueWidget, isBlack ? Color.BLACK : Color.WHITE);

        appWidgetManager.updateAppWidget(appWidgetId, views);

        //Shared Pref
        SharedPreferences prefs = getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
        SharedPreferences.Editor editor = prefs.edit();

        Gson gson = new Gson();
        editor.putString(SHARED_DATA + appWidgetId,  gson.toJson(widgetData));
        editor.apply();

        Intent resultValue = new Intent();
        resultValue.putExtra(AppWidgetManager.EXTRA_APPWIDGET_ID, appWidgetId);
        setResult(RESULT_OK, resultValue);
        finish();
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        imageViewIcon.setVisibility(View.VISIBLE);
        selectedImage = i;
        switch (i){
            case 0: {
                imageViewIcon.setImageResource(R.drawable.boy_happy);
                break;
            }
            case 1: {
                imageViewIcon.setImageResource(R.drawable.boy_sad);
                break;
            }
            case 2: {
                imageViewIcon.setImageResource(R.drawable.girl_happy);
                break;
            }
            case 3: {
                imageViewIcon.setImageResource(R.drawable.girl_sad);
                break;
            }
            default: {
                imageViewIcon.setVisibility(View.GONE);
            }
        }

    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }
}
