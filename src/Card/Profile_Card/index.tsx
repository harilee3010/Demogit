import React from 'react'
import '../Profile_Card/style.scss'
import aNam from './assets/aNam.jpg'
import aThai from './assets/aThai.jpg'
import Cuong from './assets/Cuong.jpg'

export default function profile() {
  return (
    <div className='container'>
        <div className="card">
			<div className="card__img">
				<img src={aNam} alt="" />
			</div>
			<h2>Dinh Nam</h2>
			<p>Fullstack Developer</p>
			<div className="card__social">
				<a target="_black" href="https://www.facebook.com/nam.nodemy">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a target="_black" href="https://www.youtube.com/c/Nodemy">
					<i className="fab fa-youtube"></i>
				</a>
				<a target="_black" href="https://www.tiktok.com/@manindev">
					<i className="fab fa-tiktok"></i>
				</a>
				<a target="_black" href="https://github.com/namndwebdev/html-css-js-thuc-chien">
					<i className="fab fa-github"></i>
				</a>
			</div>
			<button>Contact me</button>
		</div>
		<div className="card">
			<div className="card__img">
				<img src={aThai} alt="" />
			</div>
			<h2>Minh Thai</h2>
			<p>Fullstack Developer</p>
			<div className="card__social">
				<a target="_black" href="https://www.facebook.com/minhthai.hoang.3">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a target="_black" href="https://www.youtube.com/c/Nodemy">
					<i className="fab fa-youtube"></i>
				</a>
				<a target="_black" href="https://www.tiktok.com/@manindev">
					<i className="fab fa-tiktok"></i>
				</a>
				<a target="_black" href="https://github.com/namndwebdev/html-css-js-thuc-chien">
					<i className="fab fa-github"></i>
				</a>
			</div>
			<button>Contact me</button>
		</div>
		<div className="card">
			<div className="card__img">
				<img src={Cuong} alt="" />
			</div>
			<h2>Cuong Nv</h2>
			<p>Fullstack Developer</p>
			<div className="card__social">
				<a target="_black" href="https://www.facebook.com/CuongNv.2002/">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a target="_black" href="https://www.youtube.com/c/Nodemy">
					<i className="fab fa-youtube"></i>
				</a>
				<a target="_black" href="https://www.tiktok.com/@manindev">
					<i className="fab fa-tiktok"></i>
				</a>
				<a target="_black" href="https://github.com/namndwebdev/html-css-js-thuc-chien">
					<i className="fab fa-github"></i>
				</a>
			</div>
			<button>Contact me</button>
		</div>
    </div>
  )
}
