import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(BasePlugin)
public class BasePlugin: CAPPlugin {
  private let implementation = Base()

  @objc func echo(_ call: CAPPluginCall) {
    do {
      let value = call.getString("value")
      call.resolve([
          "value": try implementation.echo(value)
      ])
    } catch let error {
      call.reject(error.runtimeError)
    }
  }
}
