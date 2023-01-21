package com.orange.demo.plugin;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.viewnext.capacitorbase.BasePlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    registerPlugin(BasePlugin.class);
    super.onCreate(savedInstanceState);
  }
}
