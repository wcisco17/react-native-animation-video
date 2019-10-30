using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Animation.Video.RNAnimationVideo
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNAnimationVideoModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNAnimationVideoModule"/>.
        /// </summary>
        internal RNAnimationVideoModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNAnimationVideo";
            }
        }
    }
}
