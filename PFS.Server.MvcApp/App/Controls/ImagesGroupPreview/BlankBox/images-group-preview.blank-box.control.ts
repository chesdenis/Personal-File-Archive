import {Component, OnInit, Input} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "images-group-preview-box",
    templateUrl: "./images-group-preview.blank-box.control.html",
    styleUrls: ["./images-group-preview.blank-box.control.css"],
})
export class ImagesGroupPreviewBlankBoxControl implements OnInit {
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