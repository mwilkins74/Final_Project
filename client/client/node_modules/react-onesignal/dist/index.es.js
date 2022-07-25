const ONESIGNAL_SDK_ID = 'onesignal-sdk';
const ONE_SIGNAL_SCRIPT_SRC = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
const reactOneSignalFunctionQueue = [];
// true if the script is successfully loaded from CDN.
let isOneSignalInitialized = false;
// true if the script fails to load from CDN. A separate flag is necessary
// to disambiguate between a CDN load failure and a delayed call to
// OneSignal#init.
let isOneSignalScriptFailed = false;
const doesOneSignalExist = () => {
    if (window["OneSignal"]) {
        return true;
    }
    return false;
};
const handleOnLoad = (resolve, options) => {
    isOneSignalInitialized = true;
    // OneSignal is assumed to be loaded correctly because this method
    // is called after the script is successfully loaded by CDN, but
    // just in case.
    window["OneSignal"] = window["OneSignal"] || [];
    window["OneSignal"].push(() => {
        window["OneSignal"].init(options);
    });
    window["OneSignal"].push(() => {
        processQueuedOneSignalFunctions();
        resolve();
    });
};
const handleOnError = (resolve) => {
    isOneSignalScriptFailed = true;
    // Ensure that any unresolved functions are cleared from the queue,
    // even in the event of a CDN load failure.
    processQueuedOneSignalFunctions();
    resolve();
};
const processQueuedOneSignalFunctions = () => {
    reactOneSignalFunctionQueue.forEach(element => {
        const { name, args, promiseResolver } = element;
        if (!!promiseResolver) {
            OneSignalReact[name](...args).then(result => {
                promiseResolver(result);
            });
        }
        else {
            OneSignalReact[name](...args);
        }
    });
};
const init = (options) => new Promise(resolve => {
    if (isOneSignalInitialized) {
        resolve();
        return;
    }
    if (!options || !options.appId) {
        throw new Error('You need to provide your OneSignal appId.');
    }
    if (!document) {
        resolve();
        return;
    }
    const script = document.createElement('script');
    script.id = ONESIGNAL_SDK_ID;
    script.src = ONE_SIGNAL_SCRIPT_SRC;
    script.async = true;
    script.onload = () => {
        handleOnLoad(resolve, options);
    };
    // Always resolve whether or not the script is successfully initialized.
    // This is important for users who may block cdn.onesignal.com w/ adblock.
    script.onerror = () => {
        handleOnError(resolve);
    };
    document.head.appendChild(script);
});
function on(event, listener) {
    if (!doesOneSignalExist()) {
        reactOneSignalFunctionQueue.push({
            name: 'on',
            args: arguments,
        });
        return;
    }
    window["OneSignal"].push(() => {
        window["OneSignal"].on(event, listener);
    });
}
function off(event, listener) {
    if (!doesOneSignalExist()) {
        reactOneSignalFunctionQueue.push({
            name: 'off',
            args: arguments,
        });
        return;
    }
    window["OneSignal"].push(() => {
        window["OneSignal"].off(event, listener);
    });
}
function once(event, listener) {
    if (!doesOneSignalExist()) {
        reactOneSignalFunctionQueue.push({
            name: 'once',
            args: arguments,
        });
        return;
    }
    window["OneSignal"].push(() => {
        window["OneSignal"].once(event, listener);
    });
}
function isPushNotificationsEnabled(callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'isPushNotificationsEnabled',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].isPushNotificationsEnabled(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function showHttpPrompt(options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'showHttpPrompt',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].showHttpPrompt(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function registerForPushNotifications(options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'registerForPushNotifications',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].registerForPushNotifications(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function setDefaultNotificationUrl(url) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'setDefaultNotificationUrl',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].setDefaultNotificationUrl(url)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function setDefaultTitle(title) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'setDefaultTitle',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].setDefaultTitle(title)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function getTags(callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'getTags',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].getTags(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function sendTag(key, value, callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'sendTag',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].sendTag(key, value, callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function sendTags(tags, callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'sendTags',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].sendTags(tags, callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function deleteTag(tag) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'deleteTag',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].deleteTag(tag)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function deleteTags(tags, callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'deleteTags',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].deleteTags(tags, callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function addListenerForNotificationOpened(callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'addListenerForNotificationOpened',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].addListenerForNotificationOpened(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function setSubscription(newSubscription) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'setSubscription',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].setSubscription(newSubscription)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function showHttpPermissionRequest(options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'showHttpPermissionRequest',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].showHttpPermissionRequest(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function showNativePrompt() {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'showNativePrompt',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].showNativePrompt()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function showSlidedownPrompt(options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'showSlidedownPrompt',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].showSlidedownPrompt(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function showCategorySlidedown(options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'showCategorySlidedown',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].showCategorySlidedown(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function showSmsSlidedown(options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'showSmsSlidedown',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].showSmsSlidedown(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function showEmailSlidedown(options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'showEmailSlidedown',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].showEmailSlidedown(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function showSmsAndEmailSlidedown(options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'showSmsAndEmailSlidedown',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].showSmsAndEmailSlidedown(options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function getNotificationPermission(onComplete) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'getNotificationPermission',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].getNotificationPermission(onComplete)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function getUserId(callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'getUserId',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].getUserId(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function getSubscription(callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'getSubscription',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].getSubscription(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function setEmail(email, options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'setEmail',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].setEmail(email, options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function setSMSNumber(smsNumber, options) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'setSMSNumber',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].setSMSNumber(smsNumber, options)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function logoutEmail() {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'logoutEmail',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].logoutEmail()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function logoutSMS() {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'logoutSMS',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].logoutSMS()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function setExternalUserId(externalUserId, authHash) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'setExternalUserId',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].setExternalUserId(externalUserId, authHash)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function removeExternalUserId() {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'removeExternalUserId',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].removeExternalUserId()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function getExternalUserId() {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'getExternalUserId',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].getExternalUserId()
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function provideUserConsent(consent) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'provideUserConsent',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].provideUserConsent(consent)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function getEmailId(callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'getEmailId',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].getEmailId(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function getSMSId(callback) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'getSMSId',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].getSMSId(callback)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
function sendOutcome(outcomeName, outcomeWeight) {
    return new Promise((resolve, reject) => {
        if (isOneSignalScriptFailed) {
            resolve();
            return;
        }
        if (!doesOneSignalExist()) {
            reactOneSignalFunctionQueue.push({
                name: 'sendOutcome',
                args: arguments,
                promiseResolver: resolve,
            });
            return;
        }
        try {
            window["OneSignal"].push(() => {
                window["OneSignal"].sendOutcome(outcomeName, outcomeWeight)
                    .then((value) => resolve(value))
                    .catch((error) => reject(error));
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
const OneSignalReact = {
    init,
    on,
    off,
    once,
    isPushNotificationsEnabled,
    showHttpPrompt,
    registerForPushNotifications,
    setDefaultNotificationUrl,
    setDefaultTitle,
    getTags,
    sendTag,
    sendTags,
    deleteTag,
    deleteTags,
    addListenerForNotificationOpened,
    setSubscription,
    showHttpPermissionRequest,
    showNativePrompt,
    showSlidedownPrompt,
    showCategorySlidedown,
    showSmsSlidedown,
    showEmailSlidedown,
    showSmsAndEmailSlidedown,
    getNotificationPermission,
    getUserId,
    getSubscription,
    setEmail,
    setSMSNumber,
    logoutEmail,
    logoutSMS,
    setExternalUserId,
    removeExternalUserId,
    getExternalUserId,
    provideUserConsent,
    getEmailId,
    getSMSId,
    sendOutcome,
};

export default OneSignalReact;
//# sourceMappingURL=index.es.js.map
