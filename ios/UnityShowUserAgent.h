
#import <sys/utsname.h>

#if __has_include("RCTBridgeModule.h")
#import "RCTBridgeModule.h"
#else
#import <React/RCTBridgeModule.h>
#endif

@interface UnityShowUserAgent : NSObject <RCTBridgeModule>
@end
