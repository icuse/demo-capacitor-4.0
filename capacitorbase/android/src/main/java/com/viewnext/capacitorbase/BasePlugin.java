package com.viewnext.capacitorbase;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@SuppressWarnings("unused")
@CapacitorPlugin(name = "BasePlugin")
public class BasePlugin extends Plugin {
  private final Base implementation = new Base();

  @PluginMethod
  public void echo(PluginCall call) {
    try {
      JSObject ret = new JSObject();
      String value = call.getString("value");
      ret.put("value", implementation.echo(value));
      call.resolve(ret);
    } catch (Exception e) {
      call.reject(e.getMessage());
    }
  }
}
