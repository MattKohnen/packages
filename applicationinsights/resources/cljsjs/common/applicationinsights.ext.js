/**********************************************************************
 * Extern for Microsoft
 * Generated by http://jmmk.github.io/javascript-externs-generator
 **********************************************************************/
var Microsoft = {
  "ApplicationInsights": {
    "AjaxMonitor": {
      "DisabledPropertyName": {},
      "getFailedAjaxDiagnosticsMessage": function () {},
      "instrumentedByAppInsightsName": {}
    },
    "AppInsights": {
      "defaultConfig": {
        "autoTrackPageVisitTime": {},
        "diagnosticLogInterval": {},
        "disableAjaxTracking": {},
        "disableCorrelationHeaders": {},
        "disableExceptionTracking": {},
        "disableFlushOnBeforeUnload": {},
        "disableTelemetry": {},
        "emitLineDelimitedJson": {},
        "enableDebug": {},
        "enableSessionStorageBuffer": {},
        "endpointUrl": {},
        "isBeaconApiDisabled": {},
        "isBrowserLinkTrackingEnabled": {},
        "isCookieUseDisabled": {},
        "isRetryDisabled": {},
        "isStorageUseDisabled": {},
        "maxAjaxCallsPerView": {},
        "maxBatchInterval": {},
        "maxBatchSizeInBytes": {},
        "samplingPercentage": {},
        "sessionExpirationMs": {},
        "sessionRenewalMs": {},
        "verboseLogging": {}
      }
    },
    "ArraySendBuffer": function () {},
    "Context": {
      "Application": function () {},
      "Device": function () {},
      "Internal": function () {},
      "Location": function () {},
      "Operation": function () {},
      "Sample": function () {},
      "Session": function () {},
      "User": {
        "authUserCookieName": {},
        "cookieSeparator": {},
        "userCookieName": {}
      },
      "_SessionManager": {
        "acquisitionSpan": {},
        "cookieUpdateInterval": {},
        "renewalSpan": {}
      }
    },
    "DataLossAnalyzer": {
      "ISSUES_REPORTED_KEY": {},
      "ITEMS_QUEUED_KEY": {},
      "LIMIT_PER_SESSION": {},
      "decrementItemsQueued": function () {},
      "enabled": {},
      "getIssuesReported": function () {},
      "getNumberOfLostItems": function () {},
      "incrementItemsQueued": function () {},
      "isEnabled": function () {},
      "itemsRestoredFromSessionBuffer": {},
      "reportLostItems": function () {},
      "reset": function () {}
    },
    "EventHelper": {
      "AttachEvent": function () {},
      "DetachEvent": function () {}
    },
    "FieldType": {
      "0": {},
      "1": {},
      "2": {},
      "4": {},
      "Array": {},
      "Default": {},
      "Hidden": {},
      "Required": {}
    },
    "HashCodeScoreGenerator": {
      "INT_MAX_VALUE": {},
      "MIN_INPUT_LENGTH": {}
    },
    "Initialization": {
      "getDefaultConfig": function () {}
    },
    "LoggingSeverity": {
      "0": {},
      "1": {},
      "CRITICAL": {},
      "WARNING": {}
    },
    "SamplingScoreGenerator": function () {},
    "Sender": {
      "MaxBeaconPayloadSize": {}
    },
    "Serializer": {
      "_serializeArray": function () {},
      "_serializeObject": function () {},
      "_serializeStringMap": function () {},
      "serialize": function () {}
    },
    "SessionStorageSendBuffer": {
      "BUFFER_KEY": {},
      "MAX_BUFFER_SIZE": {},
      "SENT_BUFFER_KEY": {}
    },
    "SplitTest": function () {},
    "Telemetry": {
      "Common": {
        "Base": function () {},
        "Data": function () {},
        "DataPoint": function () {},
        "DataSanitizer": {
          "MAX_EXCEPTION_LENGTH": {},
          "MAX_MESSAGE_LENGTH": {},
          "MAX_NAME_LENGTH": {},
          "MAX_STRING_LENGTH": {},
          "MAX_URL_LENGTH": {},
          "padNumber": function () {},
          "sanitizeException": function () {},
          "sanitizeKey": function () {},
          "sanitizeKeyAndAddUniqueness": function () {},
          "sanitizeMeasurements": function () {},
          "sanitizeMessage": function () {},
          "sanitizeProperties": function () {},
          "sanitizeString": function () {},
          "sanitizeUrl": function () {}
        },
        "Envelope": function () {}
      },
      "Event": {
        "dataType": {},
        "envelopeType": {}
      },
      "Exception": {
        "CreateSimpleException": function () {},
        "dataType": {},
        "envelopeType": {}
      },
      "Metric": {
        "dataType": {},
        "envelopeType": {}
      },
      "PageView": {
        "dataType": {},
        "envelopeType": {}
      },
      "PageViewManager": function () {},
      "PageViewPerformance": {
        "MAX_DURATION_ALLOWED": {},
        "dataType": {},
        "envelopeType": {},
        "getDuration": function () {},
        "getPerformanceTiming": function () {},
        "isPerformanceTimingDataReady": function () {},
        "isPerformanceTimingSupported": function () {},
        "shouldCollectDuration": function () {}
      },
      "PageVisitData": function () {},
      "PageVisitTimeManager": function () {},
      "RemoteDependencyData": {
        "dataType": {},
        "envelopeType": {}
      },
      "Trace": {
        "dataType": {},
        "envelopeType": {}
      },
      "_StackFrame": {
        "baseSize": {},
        "regex": {}
      }
    },
    "TelemetryContext": function () {},
    "UrlHelper": {
      "document": {},
      "getAbsoluteUrl": function () {},
      "getCompleteUrl": function () {},
      "getPathName": function () {},
      "parseUrl": function () {}
    },
    "Util": {
      "IsBeaconApiSupported": function () {},
      "NotSpecified": {},
      "_canUseCookies": {},
      "_canUseLocalStorage": {},
      "_canUseSessionStorage": {},
      "_getLocalStorageObject": function () {},
      "_getSessionStorageObject": function () {},
      "_getVerifiedStorageObject": function () {},
      "addEventHandler": function () {},
      "canUseCookies": function () {},
      "canUseLocalStorage": function () {},
      "canUseSessionStorage": function () {},
      "deleteCookie": function () {},
      "disableCookies": function () {},
      "disableStorage": function () {},
      "document": {},
      "dump": function () {},
      "getCookie": function () {},
      "getExceptionName": function () {},
      "getIEVersion": function () {},
      "getSessionStorage": function () {},
      "getSessionStorageKeys": function () {},
      "getStorage": function () {},
      "isArray": function () {},
      "isCrossOriginError": function () {},
      "isDate": function () {},
      "isError": function () {},
      "msToTimeSpan": function () {},
      "newId": function () {},
      "removeSessionStorage": function () {},
      "removeStorage": function () {},
      "setCookie": function () {},
      "setSessionStorage": function () {},
      "setStorage": function () {},
      "stringToBoolOrDefault": function () {},
      "toISOStringForIE8": function () {},
      "trim": function () {}
    },
    "Version": {},
    "XHRMonitoringState": function () {},
    "_InternalLogMessage": {
      "AiNonUserActionablePrefix": {},
      "AiUserActionablePrefix": {},
      "sanitizeDiagnosticText": function () {}
    },
    "_InternalLogging": {
      "AIInternalMessagePrefix": {},
      "MAX_INTERNAL_MESSAGE_LIMIT": {},
      "_areInternalMessagesThrottled": function () {},
      "_messageCount": {},
      "_messageLogged": {},
      "clearInternalMessageLoggedTypes": function () {},
      "enableDebugExceptions": function () {},
      "logInternalMessage": function () {},
      "queue": {},
      "resetInternalMessageCount": function () {},
      "setMaxInternalMessageLimit": function () {},
      "throwInternal": function () {},
      "verboseLogging": function () {},
      "warnToConsole": function () {}
    },
    "_InternalMessageId": {
      "0": {},
      "1": {},
      "10": {},
      "11": {},
      "12": {},
      "13": {},
      "14": {},
      "15": {},
      "16": {},
      "17": {},
      "18": {},
      "19": {},
      "2": {},
      "20": {},
      "21": {},
      "22": {},
      "23": {},
      "24": {},
      "25": {},
      "26": {},
      "27": {},
      "28": {},
      "29": {},
      "3": {},
      "30": {},
      "31": {},
      "32": {},
      "33": {},
      "34": {},
      "35": {},
      "36": {},
      "37": {},
      "38": {},
      "39": {},
      "4": {},
      "40": {},
      "41": {},
      "42": {},
      "43": {},
      "44": {},
      "45": {},
      "46": {},
      "47": {},
      "48": {},
      "49": {},
      "5": {},
      "50": {},
      "51": {},
      "52": {},
      "53": {},
      "54": {},
      "55": {},
      "56": {},
      "57": {},
      "58": {},
      "59": {},
      "6": {},
      "60": {},
      "61": {},
      "62": {},
      "63": {},
      "64": {},
      "65": {},
      "7": {},
      "8": {},
      "9": {},
      "BrowserCannotReadLocalStorage": {},
      "BrowserCannotReadSessionStorage": {},
      "BrowserCannotWriteLocalStorage": {},
      "BrowserCannotWriteSessionStorage": {},
      "BrowserDoesNotSupportLocalStorage": {},
      "BrowserFailedRemovalFromLocalStorage": {},
      "BrowserFailedRemovalFromSessionStorage": {},
      "CannotAccessCookie": {},
      "CannotSendEmptyTelemetry": {},
      "CannotSerializeObject": {},
      "CannotSerializeObjectNonSerializable": {},
      "CircularReferenceDetected": {},
      "ClearAuthContextFailed": {},
      "ClientPerformanceMathError": {},
      "ErrorPVCalc": {},
      "ErrorParsingAISessionCookie": {},
      "ExceptionTruncated": {},
      "ExceptionWhileLoggingError": {},
      "FailedAddingTelemetryToBuffer": {},
      "FailedMonitorAjaxAbort": {},
      "FailedMonitorAjaxDur": {},
      "FailedMonitorAjaxOpen": {},
      "FailedMonitorAjaxRSC": {},
      "FailedMonitorAjaxSend": {},
      "FailedToAddHandlerForOnBeforeUnload": {},
      "FailedToFixDepricatedValues": {},
      "FailedToReportDataLoss": {},
      "FailedToRestoreStorageBuffer": {},
      "FailedToSendQueuedTelemetry": {},
      "FailedToSetStorageBuffer": {},
      "FlushFailed": {},
      "IllegalCharsInName": {},
      "InvalidBackendResponse": {},
      "InvalidDurationValue": {},
      "ItemNotInArray": {},
      "MaxAjaxPerPVExceeded": {},
      "MessageLimitPerPVExceeded": {},
      "MessageTruncated": {},
      "MissingRequiredFieldSpecification": {},
      "NameTooLong": {},
      "NavigationTimingNotSupported": {},
      "OnError": {},
      "SampleRateOutOfRange": {},
      "SenderNotInitialized": {},
      "SessionRenewalDateIsZero": {},
      "SessionStorageBufferFull": {},
      "SetAuthContextFailed": {},
      "SetAuthContextFailedAccountName": {},
      "StartCalledMoreThanOnce": {},
      "StartTrackEventFailed": {},
      "StartTrackFailed": {},
      "StopCalledWithoutStart": {},
      "StopTrackEventFailed": {},
      "StopTrackFailed": {},
      "StringValueTooLong": {},
      "TelemetryInitializerFailed": {},
      "TelemetrySampledAndNotSent": {},
      "TrackArgumentsNotSpecified": {},
      "TrackEventFailed": {},
      "TrackExceptionFailed": {},
      "TrackMetricFailed": {},
      "TrackPVFailed": {},
      "TrackPVFailedCalc": {},
      "TrackTraceFailed": {},
      "TransmissionFailed": {},
      "UrlTooLong": {}
    },
    "ajaxRecord": function () {},
    "dateTime": {
      "GetDuration": function () {},
      "Now": function () {}
    },
    "extensions": {
      "IsNullOrUndefined": function () {}
    },
    "stringUtils": {
      "GetLength": function () {}
    }
  },
  "Telemetry": {
    "Base": function () {},
    "Data": function () {},
    "Domain": function () {},
    "Envelope": function () {}
  }
};
Microsoft.ApplicationInsights.AjaxMonitor.prototype = {
  "Init": function () {},
  "attachToOnReadyStateChange": function () {},
  "instrumentAbort": function () {},
  "instrumentOpen": function () {},
  "instrumentSend": function () {},
  "isMonitoredInstance": function () {},
  "onAjaxComplete": function () {},
  "openHandler": function () {},
  "sendHandler": function () {},
  "supportsMonitoring": function () {}
};
Microsoft.ApplicationInsights.AppInsights.prototype = {
  "SendCORSException": function () {},
  "_onerror": function () {},
  "clearAuthenticatedUserContext": function () {},
  "flush": function () {},
  "sendPageViewInternal": function () {},
  "sendPageViewPerformanceInternal": function () {},
  "setAuthenticatedUserContext": function () {},
  "startTrackEvent": function () {},
  "startTrackPage": function () {},
  "stopTrackEvent": function () {},
  "stopTrackPage": function () {},
  "trackAjax": function () {},
  "trackDependency": function () {},
  "trackEvent": function () {},
  "trackException": function () {},
  "trackMetric": function () {},
  "trackPageView": function () {},
  "trackPageVisitTime": function () {},
  "trackTrace": function () {}
};
Microsoft.ApplicationInsights.ArraySendBuffer.prototype = {
  "batchPayloads": function () {},
  "clear": function () {},
  "clearSent": function () {},
  "count": function () {},
  "enqueue": function () {},
  "getItems": function () {},
  "markAsSent": function () {}
};
Microsoft.ApplicationInsights.Context.Sample.prototype = {
  "isSampledIn": function () {}
};
Microsoft.ApplicationInsights.Context.User.prototype = {
  "clearAuthenticatedUserContext": function () {},
  "setAuthenticatedUserContext": function () {},
  "validateUserInput": function () {}
};
Microsoft.ApplicationInsights.Context._SessionManager.prototype = {
  "backup": function () {},
  "initializeAutomaticSession": function () {},
  "initializeAutomaticSessionWithData": function () {},
  "renew": function () {},
  "setCookie": function () {},
  "setStorage": function () {},
  "update": function () {}
};
Microsoft.ApplicationInsights.HashCodeScoreGenerator.prototype = {
  "getHashCode": function () {},
  "getHashCodeScore": function () {}
};
Microsoft.ApplicationInsights.Initialization.prototype = {
  "addHousekeepingBeforeUnload": function () {},
  "emptyQueue": function () {},
  "loadAppInsights": function () {},
  "pollInteralLogs": function () {}
};
Microsoft.ApplicationInsights.SamplingScoreGenerator.prototype = {
  "getSamplingScore": function () {}
};
Microsoft.ApplicationInsights.Sender.prototype = {
  "_beaconSender": function () {},
  "_formatErrorMessageXdr": function () {},
  "_formatErrorMessageXhr": function () {},
  "_getSizeInBytes": function () {},
  "_isRetriable": function () {},
  "_onError": function () {},
  "_onPartialSuccess": function () {},
  "_onSuccess": function () {},
  "_parseResponse": function () {},
  "_resendPayload": function () {},
  "_setRetryTime": function () {},
  "_setupTimer": function () {},
  "_xdrOnLoad": function () {},
  "_xdrSender": function () {},
  "_xhrReadyStateChange": function () {},
  "_xhrSender": function () {},
  "send": function () {},
  "triggerSend": function () {}
};
Microsoft.ApplicationInsights.SessionStorageSendBuffer.prototype = {
  "batchPayloads": function () {},
  "clear": function () {},
  "clearSent": function () {},
  "count": function () {},
  "enqueue": function () {},
  "getBuffer": function () {},
  "getItems": function () {},
  "markAsSent": function () {},
  "removePayloadsFromBuffer": function () {},
  "setBuffer": function () {}
};
Microsoft.ApplicationInsights.SplitTest.prototype = {
  "isEnabled": function () {}
};
Microsoft.ApplicationInsights.Telemetry.Common.Base.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry.Common.Data.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry.Common.DataPoint.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry.Common.Envelope.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry.Event.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry.Exception.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry.Metric.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry.PageView.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry.PageViewManager.prototype = {
  "trackPageView": function () {}
};
Microsoft.ApplicationInsights.Telemetry.PageViewPerformance.prototype = {
  "constructor": function () {},
  "getDurationMs": function () {},
  "getIsValid": function () {}
};
Microsoft.ApplicationInsights.Telemetry.PageVisitTimeManager.prototype = {
  "restartPageVisitTimer": function () {},
  "startPageVisitTimer": function () {},
  "stopPageVisitTimer": function () {},
  "trackPreviousPageVisit": function () {}
};
Microsoft.ApplicationInsights.Telemetry.RemoteDependencyData.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry.Trace.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.Telemetry._StackFrame.prototype = {
  "constructor": function () {}
};
Microsoft.ApplicationInsights.TelemetryContext.prototype = {
  "_addDefaultTelemetryInitializers": function () {},
  "_applyApplicationContext": function () {},
  "_applyDeviceContext": function () {},
  "_applyInternalContext": function () {},
  "_applyLocationContext": function () {},
  "_applyOperationContext": function () {},
  "_applySampleContext": function () {},
  "_applySessionContext": function () {},
  "_applyUserContext": function () {},
  "_fixDepricatedValues": function () {},
  "_fixRDDDepricatedValues": function () {},
  "_track": function () {},
  "addTelemetryInitializer": function () {},
  "track": function () {}
};
Microsoft.ApplicationInsights.ajaxRecord.prototype = {
  "getAbsoluteUrl": function () {},
  "getPathName": function () {}
};
Microsoft.Telemetry.Data.prototype = {
  "constructor": function () {}
};
/**********************************************************************
 * End Generated Extern for Microsoft
/**********************************************************************/
