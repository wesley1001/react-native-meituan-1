'use strict';

function getImageSource(shopData: Object, kind: ?string): {uri: ?string} {
  var uri = shopData && shopData.imgurl ? shopData.imgurl : null;
  if (uri && kind) {
    uri = uri.replace('w.h', '160.0');
  }
  return { uri };
}

export {getImageSource};
