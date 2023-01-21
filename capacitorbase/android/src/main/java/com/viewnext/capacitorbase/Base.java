package com.viewnext.capacitorbase;

import android.util.Log;

public class Base {
  public String echo(String value) throws Exception {
    String message;
    if (value != null) {
      Log.i("Echo", value);
      message = "Plugin run from native side! (Android) - ".concat(value);
    } else {
      throw new Exception("Error running plugin from native side (Android)");
    }
    return message;
  }
}
