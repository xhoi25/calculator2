import React, {useContext} from 'react'
import { Col, Container, Row, Image, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router'
import { MainContext } from '../state/MainContext'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
const SinglePost = () => {
    const {contentData} = useContext(MainContext)
    const singlePost = contentData[useParams().index]

    if(singlePost){
        console.log(singlePost.fields.content.content)
        return (
            <div>
                <Container className="my-5">
                    <Row>
                        <Col>
                        <Image className="single_post_image mb-4" src={singlePost.fields.featuredImage.fields.file.url} fluid></Image>
                        <h1>{singlePost.fields.title}</h1>
                    <p>{documentToReactComponents(singlePost.fields.content)}</p>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    if(!singlePost){
        setTimeout(()=>{
            document.location.href = "http://localhost:3000/";
        }, 5000)
        return(
            <Spinner animation="grow" />
        )
    }
}

export default SinglePost
