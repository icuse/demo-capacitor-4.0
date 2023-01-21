import Foundation

@objc public class Base: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
