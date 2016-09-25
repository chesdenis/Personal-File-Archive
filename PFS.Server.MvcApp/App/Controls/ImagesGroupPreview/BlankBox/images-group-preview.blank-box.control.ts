import {Component, OnInit} from "@angular/core";

@Component({
    selector: "images-group-preview-box",
    templateUrl: "./images-group-preview.blank-box.control.html",
    styleUrls: ["/app/controls/imagesgrouppreview/blankbox/images-group-preview.blank-box.control.css"]
})
export class ImagesGroupPreviewBlankBoxControl implements OnInit{
    images: Array<any> = [];

    ngOnInit(){
        this.GetListOfImages();
    }

    private GetListOfImages():void{
        this.images.push(this.ConfigureImageInfo("1", "fakeImages/1.jpg"));
        this.images.push(this.ConfigureImageInfo("2", "fakeImages/2.jpg"));
        this.images.push(this.ConfigureImageInfo("3", "fakeImages/3.jpg"));
        this.images.push(this.ConfigureImageInfo("4", "fakeImages/4.jpg"));
        this.images.push(this.ConfigureImageInfo("5", "fakeImages/5.jpg"));
        this.images.push(this.ConfigureImageInfo("6", "fakeImages/6.jpg"));
        this.images.push(this.ConfigureImageInfo("7", "fakeImages/7.jpg"));
        this.images.push(this.ConfigureImageInfo("8", "fakeImages/8.jpg"));
        this.images.push(this.ConfigureImageInfo("9", "fakeImages/9.jpg"));
    }

    private ConfigureImageInfo(imageName, imageRelativeUrl):any{
        let imageInfo:any = {};
        imageInfo.Name = imageName;
        imageInfo.AbsoluteUrl = "app/controls/imagesgrouppreview/blankbox" + "/" + imageRelativeUrl;

        return imageInfo;
    }

    private ShowImageName(image:any):void{
        alert("Show image " + image.Name);
    }
}