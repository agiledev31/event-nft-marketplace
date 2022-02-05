import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000;

  .flip-container {
  width: 300px;
  height: 200px;
  perspective: 1000px;
}

.flipper {
  position: relative;
	width: 100%;
	height: 100%;
  transition: transform 0.8s;
	transform-style: preserve-3d;
}

.flip-container:hover .flipper{
	transform: rotateY(180deg);
}

.front, .back{
  position: absolute;
  width: 100%;
  height: 100%;
}
`


export const Perfil = styled.div<{ top: number, width: number, height: number }>`
  width: 160px;
  height: 160px;
  margin-top: 0px;
  background: aliceblue;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s;

  svg { 
    width: 80px;
    height: 80px;
    transition: all 1s;
  }

  img { 
    width: 160px;
    height: 160px;
    transition: all 1s;
    border-radius: 16px;
    object-fit: cover;
  }

  input[type="file"] {
    opacity: 0;
    position: absolute;
    
    cursor: pointer;
    z-index: 99999;
    border-radius: 16px;
    width: 145px;
    height: 145px;
  }

  &:hover {
    transition: all 1s;
    box-shadow: 0px 0px 15px 2px #387289;
  }
`

export const Spinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 7px;
  width: 100%;
  z-index: 9999;
  top: 0;
  animation: spin 1s 0.1s ease-in-out infinite both;

  @keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
`
