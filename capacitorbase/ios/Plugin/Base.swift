import Foundation

@objc public class Base: NSObject {
  enum MyError: Error {
    case runtimeError(String)
  }

  @objc public func echo(_ value: String) throws -> String {
    let message: String
    if value != nil {
      print("Echo \(value)")
      message = "Plugin run from native side! (iOS) - \(value)"
    } else {
      throw MyError.runtimeError("Error running plugin from native side (iOS)")
    }
    return message
  }
}
