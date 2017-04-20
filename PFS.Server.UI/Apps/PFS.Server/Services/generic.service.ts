
// export class GenericService<T>{
//     initDbContext():Promise<Default.Container>{
//         return factory({}).onReady();
//     }
// }

// export class VideoService extends GenericService<PFS.Server.Core.Entities.Video>{
//     getVideos():Promise<PFS.Server.Core.Entities.Video[]>{
//         return this.initDbContext()
//         .then((dbCtx)=>{
//             return dbCtx.Videos.toArray();
//         });
//     }
// }