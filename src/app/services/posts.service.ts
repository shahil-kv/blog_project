import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';

import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  loadFeature() {
    return this.afs.collection('posts', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, data }
        })
      })
    )
  }

  loadLatest() {
    return this.afs.collection('posts', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, data }
        })
      })
    )
  }

  loadCategoryPosts(categoryId: any) {
    return this.afs.collection('posts', ref => ref.where('category.categoryId', '==', categoryId)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, data }
        })
      })
    )
  }

  loadOnePost(postId: string) {
    return this.afs.doc(`posts/${postId}`).valueChanges();
  }

  loadSimilar(catId: string) {
    return this.afs.collection('posts', ref => ref.where('category.categoryId', '==', catId).limit(2)).snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data()
          const id = a.payload.doc.id
          return { id, data }
        })
      })
    )
  }

  // countViews(postId: string) {
  //   const viewCount = {
  //     views: firebase.default.firestore.FieldValue.increment(1)
  //   }
  //   this.afs.doc(`posts/${postId}`).update(viewCount).then(() => {
  //     console.log("Views count updated")
  //   })
  // }
}
