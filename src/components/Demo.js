import React, { useState } from 'react';

const Demo = ({ title, uri, views, upvotes, downvotes, comments, createdAt }) => {

    const [like, setLike] = useState(upvotes);
    const [dislike, setDislike] = useState(downvotes);
    const [show, setShow] = useState(true);

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={uri}
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />

            <h1 className="title">{title}</h1>
            <p className="info">{views} Views | Uploaded {createdAt}</p>
            <button className="buttons" onClick={() => setLike(like + 1)}>{like} 👍 </button>
            <button className="buttons" onClick={() => setDislike(dislike + 1)}>{dislike} 👎 </button> <br />
            <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} Comments</button><hr />
            {
                show ? (
                    <div>
                        <h1>{comments.length} Comments</h1>
                        {comments.map((com) => {
                            return (
                                <div key={com.id}>
                                    <h1>{com.user}</h1>
                                    <p>{com.comment}</p>
                                </div>
                            )
                        })}
                    </div>
                ) : null
            }
        </div>
    );
};

export default Demo;
