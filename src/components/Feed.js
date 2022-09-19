import { useState } from "react";


const Feed = (props) => {

  const { user } = props;

  const [ postText, setPostText ] = useState('');

  const [listOfPosts, setListOfPosts] = useState([]);

  return (
    <div>
      <div>
        <textarea value={postText} onChange={(event) => setPostText(event.target.value)}/>
      </div>

      <div>
        
        
        
        
        
        <button onClick={() => {
            
            setListOfPosts([...listOfPosts, { id: listOfPosts.length, content: postText }])
            setPostText('')
            
        }} >Post</button>
        
      </div>
      <div>
        {listOfPosts.map((post, index) => (
          <div key={index}>
            <div>
                {user.userName}
            </div>
            <div>
                <img
                src={user.profilePhotoUrl}
                style={{width: '50px', height: '50px', objectFit: 'cover'}}

                alt={user.profilePhotoUrl}
                />
            </div>
            <div>
                {post.content}
            </div>
            <button
                onClick={()=>
                    setListOfPosts (listOfPosts.filter((p) =>{
                                                        if(p.id != post.id) 
                                                            return p
                    }))

                    
                }>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Feed;