import {Component, OnInit, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "images-group-preview-animated-box",
    templateUrl: "./images-group-preview.animated-box.control.html",
    styleUrls: ["./images-group-preview.animated-box.control.css"]
})
export class ImagesGroupPreviewAnimatedBoxControl implements OnInit {
    @Input() images: Array<any> = [];

    ngOnInit() {
        this.GetListOfImages();
    }

    private GetListOfImages(): void {
        this.images.push(this.ConfigureImageInfo("1", ""));
        this.images.push(this.ConfigureImageInfo("2", ""));
        this.images.push(this.ConfigureImageInfo("3", ""));
        this.images.push(this.ConfigureImageInfo("4", ""));
        this.images.push(this.ConfigureImageInfo("5", ""));
        this.images.push(this.ConfigureImageInfo("6", ""));
        this.images.push(this.ConfigureImageInfo("7", ""));
        this.images.push(this.ConfigureImageInfo("8", ""));
        this.images.push(this.ConfigureImageInfo("9", ""));
    }

    private ConfigureImageInfo(imageName, imageAbsoluteUrl): any {
        let imageInfo: any = {};
        imageInfo.Name = imageName;
        imageInfo.AbsoluteUrl = "http://placehold.it/75x75";

        return imageInfo;
    }
}