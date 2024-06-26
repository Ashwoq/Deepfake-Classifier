﻿# Deepfake-Classifier

## Overview
The Deepfake Detection System is a web application that allows users to upload a video and detect whether it is real or fake. The project uses a deep learning model (InceptionV3) to classify videos, and it is built with React.js for the frontend and Flask for the backend.

## Features
* Upload videos for deepfake detection
* User-friendly web interface
* Real-time analysis and results

## Technologies
* Frontend: React.js
* Backend: Flask
* Machine Learning: TensorFlow, EfficientNetB0
* Others: Docker, OpenCV, NumPy

## Limitations
* Dataset Size: The model is trained on a smaller dataset due to system constraints, which may affect accuracy. The threshold value is set at 0.45.
* Local Deployment: The application currently runs on localhost. Future plans include deploying it live.

## Backend Setup
* Clone the Repository
* Then -> cd deepfake-backend
* Create a Virtual Environment -> python -m venv venv
* Install Dependencies -> pip install -r requirements.txt
* Run Flask Server -> python app.py

## Frontend Setup
* Open New terminal from root folder then -> cd deepfake-frontend
* Install node modules -> npm i
* Run the server -> npm run dev

## Usage
* Upload a Video: Use the web interface to upload a video file.
* View Results: The application will process the video and display whether it is real or fake.

## Note
* This project is still under development and not fully completed. Some features may not be fully functional yet.

## Team Members
* Senkathir - [Senkathir](https://github.com/Senkathir23)
* Ashwoq Dedath S - [Ashwoq](https://github.com/Ashwoq) 
