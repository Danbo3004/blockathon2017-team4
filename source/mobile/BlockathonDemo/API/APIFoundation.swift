//
//  APIFoundation.swift
//  BlockathonDemo
//
//  Created by Vanalite on 11/24/17.
//  Copyright © 2017 Vanalite. All rights reserved.
//

import Foundation
import SwiftyJSON

class APIFoundation {

  // MARK: - User API
  class func requestSignInWithParams(param: JSONParams, completion: ((JSON?, Error?) -> Void)?) {
    HttpClient.request(url: Router.signInRequest(param: param)) { (response: JSON?, error: Error?) in
      self.processRequestResponse(response: response, error: error, completion: completion)
    }
  }

  class func requestFetchUser(userId: String, param: JSONParams? = nil, completion: ((JSON?, Error?) -> Void)?) {
    HttpClient.request(url: Router.fetchUser(userId: userId, param: param)) { (response: JSON?, error: Error?) in
      self.processRequestResponse(response: response, error: error, completion: completion)
    }
  }

}

// MARK: - Response processor

extension APIFoundation {

  class func processRequestResponse(response: JSON?, error: Error?, completion: ((JSON?, Error?) -> Void)?) {
    guard let response = response, error == nil else {
      completion?(nil, error)
      return
    }

    let errorMessage = response["errors"].stringValue
    if errorMessage.isEmpty {
      completion?(response, nil)
    } else {
      completion?(nil, requestAPIResponseError(errorMessage: errorMessage))
    }
  }


	public class func requestAPIResponseError(errorMessage: String) -> NSError {
		return NSError(domain: Constants.baseApiUrl, code: 400, userInfo: [NSLocalizedDescriptionKey: errorMessage])
	}

}
