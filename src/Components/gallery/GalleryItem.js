import React from 'react'; 
import { Link } from 'react-router-dom';

function GalleryItem(props) {

    let hit = props.hit; 
    let details=props.details;

    return (
        <div className="card mt-3">
            <div className="card-header">{hit.tags} | {hit.imageWidth} x {hit.imageHeight}</div>
                {details?
                    (<img className="card-img-top" src={hit.webformatURL} alt="Webformat" />):
                    (<img height="200" className="card-img-top" src={hit.webformatURL} />)
                }
            <div className="card-body">
                {details?(
                    <div className="row">
                        <div className="col-auto">
                            <img className="img-thumbnail" src={hit.userImageURL}/>
                        </div>
                        <div className="col">
                            <ul className="nav nav-pills">
                                <li className="list-group-item"><b>Views :</b> {hit.views}</li>
                                <li className="list-group-item"><b>Comments :</b> {hit.comments}</li>
                                <li className="list-group-item"><b>Downloads :</b> {hit.downloads}</li>
                                <li className="list-group-item"><b>Likes :</b> {hit.downloads}</li>
                                <li className="list-group-item"><b>Favorites :</b> {hit.favorites}</li>
                            </ul>
                        </div>
                    </div>
                ):
                (<p/>)
                }
                <div className="mt-3">
                    {!details?(
                        <Link to={'/galleryDetails/'+hit.id} className="btn btn-primary block">More Details</Link>
                        ):(
                        <Link to="/gallery" className="btn btn-primary block">Back</Link>
                    )}
                </div> 
            </div> 
        </div>
    )
} export default GalleryItem