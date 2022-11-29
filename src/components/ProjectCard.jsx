import React from 'react';
import {Col} from 'react-bootstrap';

function ProjectCard({title, description, imgUrl, link}) {
  return (
    <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} class="img-fluid" alt={title} />
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard