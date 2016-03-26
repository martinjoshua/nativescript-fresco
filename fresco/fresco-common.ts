import viewModule = require("ui/core/view");
import dependencyObservable = require("ui/core/dependency-observable");
import proxyModule = require("ui/core/proxy");

export class FrescoDrawee extends viewModule.View {

    private static srcProperty = new dependencyObservable.Property(
        "src",
        "FrescoDrawee",
        new proxyModule.PropertyMetadata(
            undefined,
            dependencyObservable.PropertyMetadataSettings.None,
            FrescoDrawee.onSrcPropertyChanged));

    get src(): string{
        return this._getValue(FrescoDrawee.srcProperty);
    }

    set src(value: string){
        this._setValue(FrescoDrawee.srcProperty, value);
    }

    private static onSrcPropertyChanged(args){
        var drawee = args.object;
        drawee.onSrcChanged(args);
    }

    protected onSrcChanged(args){

    }
}
