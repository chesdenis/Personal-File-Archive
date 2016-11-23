import {Component, OnInit, Input} from "@angular/core";
import {AnimatedBoxImageControl} from "./animated-box-image.control";

@Component({
    moduleId: module.id,
    selector: "images-group-preview-animated-box",
    templateUrl: "./images-group-preview.animated-box.control.html",
    styleUrls: ["./images-group-preview.animated-box.control.css"]
})
export class ImagesGroupPreviewAnimatedBoxControl implements OnInit {
    @Input() images: Array<AnimatedBoxImageControl> = [];

    ngOnInit() {
        this.GetListOfImages();
        this.RunImagesAnimation();
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

    private ConfigureImageInfo(imageName, imageAbsoluteUrl): AnimatedBoxImageControl {
        let imageInfo: AnimatedBoxImageControl = new AnimatedBoxImageControl();
        imageInfo.title = imageName;
        imageInfo.src = "http://placehold.it/75x75";
        imageInfo.activityState = "inactive";

        return imageInfo;
    }

    private RunImagesAnimation():void{
        setInterval(() =>{
            let rand = this.GetRandom(0, this.images.length - 1);
            this.SetSingleActiveImage(rand);
        }, 2000);
    }

    private GetRandom(min: number, max: number) : number{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private SetSingleActiveImage(imageIndex: number):void{
        for(let i = 0; i < this.images.length; i++) {
            if(i == imageIndex){
                this.images[i].activityState = 'active';
            }
            else{
                this.images[i].activityState = 'inactive';
            }
        };
    }
}