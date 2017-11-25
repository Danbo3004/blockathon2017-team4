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

  class func requestFetchUser(param: JSONParams? = nil, completion: ((JSON?, Error?) -> Void)?) {
    HttpClient.request(url: Router.fetchUser(param: param)) { (response: JSON?, error: Error?) in
      self.processRequestResponse(response: response, error: error, completion: completion)
    }
  }

	class func requestBalance(param: JSONParams, completion: ((JSON?, Error?) -> Void)?) {
		HttpClient.request(url: Router.requestBalance(param: param)) { (response: JSON?, error: Error?) in
			self.processRequestResponse(response: response, error: error, completion: completion)
		}
	}

	class func requestFetchHistory(completion: ((JSON?, Error?) -> Void)?) {
		HttpClient.request(url: Router.fetchHistory()) { (response: JSON?, error: Error?) in
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
		let errorObject = response["error"].dictionaryObject
		if let errorObject = errorObject, let errorMessage = errorObject["message"] as? String {
			completion?(nil, requestAPIResponseError(errorMessage: errorMessage))
		} else {
      completion?(response, nil)
  }
}


	public class func requestAPIResponseError(errorMessage: String) -> NSError {
		return NSError(domain: Constants.baseApiUrl, code: 400, userInfo: [NSLocalizedDescriptionKey: errorMessage])
	}

}
