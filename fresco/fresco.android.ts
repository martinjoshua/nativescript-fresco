import commonModule = require("./fresco-common");
import utils = require("utils/utils");

export class FrescoDrawee extends commonModule.FrescoDrawee {
    private _android;
    public _createUI() {
        this._android = new com.facebook.drawee.view.SimpleDraweeView(this._context);
        this.initImage();
    }

    public _clearAndroidReference() {
        this._android.setImageURI(null, null);
        this._android = undefined;
        super._clearAndroidReference();
    }

    get android() {
        return this._android;
    }

    protected onSrcChanged(args) {
        this.initImage();
    }

    private initImage() {
        if (this._android) {
            this._android.setImageURI(null, null);
            if (this.src) {
                if (!utils.isFileOrResourcePath(this.src)) {
                    this._android.setImageURI(android.net.Uri.parse(this.src), null);
                }
                else {
                    var res = utils.ad.getApplicationContext().getResources();
                    if (!res) {
                        return;
                    }
                    if (!utils.isFileOrResourcePath(this.src)) {
                        throw new Error("Path \"" + "\" is not a valid file or resource.");
                    }
                    var path = this.src;
                    if (path.indexOf(utils.RESOURCE_PREFIX) === 0) {
                        var resName = path.substr(utils.RESOURCE_PREFIX.length);
                        var identifier = res.getIdentifier(resName, 'drawable', utils.ad.getApplication().getPackageName());
                        if (0 < identifier) {
                            var uri = new android.net.Uri.Builder()
                                .scheme(com.facebook.common.util.UriUtil.LOCAL_RESOURCE_SCHEME)
                                .path(java.lang.String.valueOf(identifier))
                                .build();
                            this._android.setImageURI(uri);
                        }
                    } else {
                        this._android.setImageURI(android.net.Uri.parse((path.indexOf('file://') === 0 ? '' : 'file://') + path));
                    }
                }
            }
        }
    }
}