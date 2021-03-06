import {
	PerspectiveCamera,
} from 'three';

const cameraOptions = {
	fov: 45,
	near: 0.1,
	far: 10000,
};

class Camera {
	instance = null;
	zDepth;

	constructor() {
		this.instance = new PerspectiveCamera(
			cameraOptions.fov,
			window.innerWidth / window.innerHeight,
			cameraOptions.near,
			cameraOptions.far
		);

		this.updateZDepth();
	}

	updateZDepth = () => {
		const splitAngle = cameraOptions.fov/2;

		// Use tangent formula to find adjacent side
		this.zDepth = -(window.innerHeight) / (Math.abs(Math.tan(splitAngle*Math.PI/180)) * 2);
	};

	animate = (time) => {

		// Transition animation details
		const startTime = 0;
		const duration = 2000;
		const finalTime = startTime + duration;
		const finalYPosition = 0;
		let finalZPosition = 0;

		// Entry transition
		if(time < finalTime) {
			const progress = Math.max(((time - startTime) / duration), 0);

			// Translate along y axis
			const distanceToCover = window.innerHeight;

			// Ease out quad formula
			// const easingProgress =  progress * (2 - progress);
			// Ease in out quad formula
			const easingProgress = progress < .5 ?
				2 * progress * progress :
				-1 + (4 - 2 * progress) * progress;

			const position = distanceToCover - easingProgress * distanceToCover;
			this.instance.position.y = position;

			return {
				isDone: false,
			};
		} else {
			const heightThreshold = window.innerHeight;
			const scrollProgress = window.scrollY / heightThreshold;
			finalZPosition = this.instance.position.z + (scrollProgress * this.zDepth - this.instance.position.z) * 0.1;
		}

		this.instance.position.y = finalYPosition;
		this.instance.position.z = finalZPosition;

		return {
			isDone: true,
		};
	}

	handleResize = () => {
		this.instance.aspect = window.innerWidth / window.innerHeight;
		this.instance.updateProjectionMatrix();
		this.updateZDepth();
	}
}

export default Camera;
