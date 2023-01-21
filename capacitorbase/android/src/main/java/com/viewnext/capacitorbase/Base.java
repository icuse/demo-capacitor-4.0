package com.viewnext.capacitorbase;

import android.util.Log;

public class Base {
  public String echo(String value) {
    Log.i("Echo", value);
    value = "Plugin Base ejecutado en nativo (Android) - ".concat(value);
    return value;
  }
}
