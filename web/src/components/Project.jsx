import React from 'react'
import "../scss/components/Project.scss";

function Project() {
    return (
        <section className='projectCard'>
            <img className='img' src='./src/images/logo-landing-Bg7Hes1v.jpg' />
            <h2 className='title'> Mi proyecto 1</h2>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quaerat, atque ex dicta tenetur, illo asperiores possimus nobis eligendi soluta a ratione quos reprehenderit, eum obcaecati! Beatae itaque hic impedit!</p>
            <span className='links'>GitHub | Url a la web<a></a></span>
            <span className='techs'>React.js | Express.js | MySQL<a></a></span>



        </section>
    )
}

export default Project