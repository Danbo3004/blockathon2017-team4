//
//  Router.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/24/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import Foundation
import SwiftyJSON
import Alamofire

public enum HTTPMethod: String {
  case POST = "POST"
  case GET = "GET"
  case PUT = "PUT"
  case DELETE = "DELETE"
}

class Router {
  // User paths
  private static let loginPath = "sessions"
  private static let userPath = "users/%@"
  // Environment paths
  private static let environmentPath = "env"

  private static let contentTypeHeaderField = "Content-Type"
  private static let applicationJSONContentType = "application/json"
  static let multipartFormDataContentType = "multipart/form-data"

  // MARK: User requests
  class func signInRequest(param: JSONParams) -> URLRequestConvertible {
    return createUrlRequestWithRelativePath(relativePath: loginPath, params: param, httpMethod: .POST)
  }

  class func fetchUser(userId: String, param: JSONParams? = nil) -> URLRequestConvertible {
    let path = String(format: userPath, userId)
    return createUrlRequestWithRelativePath(relativePath: path, params: param, httpMethod: .GET)
  }

  // MARK: Private methods
  private class func createUrlRequestWithRelativePath(relativePath: String, params: JSONParams?, httpMethod: HTTPMethod, contentType: String? = applicationJSONContentType) -> URLRequestConvertible {
    let baseUrl = NSURL(string: Constants.baseApiUrl)!
		var request = URLRequest(url:  baseUrl.appendingPathComponent(relativePath)!)
    request.httpMethod = httpMethod.rawValue
    request.setValue(Constants.apiAppToken, forHTTPHeaderField: "APP_TOKEN")
    if let contentType = contentType {
      request.setValue(contentType, forHTTPHeaderField: contentTypeHeaderField)
    }
		let encodedURLRequest = try! URLEncoding.queryString.encode(request, with: params?.toParam())
		return encodedURLRequest;
  }

}
