package com.chiawallet;

import java.util.List;

public class WidgetData {

    public int selectedImage;
    public List<ChiaAddress> addresses;
    public boolean showXCH, showFiat, isBlack, showName;
    public double xchValue = 0, fiatValue = 0;
    public String fiatString, name;
}
