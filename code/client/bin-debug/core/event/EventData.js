var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var core;
(function (core) {
    var EventData = (function (_super) {
        __extends(EventData, _super);
        function EventData(messageID, messageData) {
            var _this = _super.call(this) || this;
            _this.messageID = messageID;
            _this.messageData = messageData;
            return _this;
        }
        return EventData;
    }(egret.HashObject));
    core.EventData = EventData;
    __reflect(EventData.prototype, "core.EventData", ["core.IMessage"]);
})(core || (core = {}));
//# sourceMappingURL=EventData.js.map