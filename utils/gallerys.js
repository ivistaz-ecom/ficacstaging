'use client'
import React, { useState, useEffect } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import GalleryPopup from '../components/GalleryPopup'; // Adjust the path based on your project structure

import ConfigData from '../config.json'

const Post = ({ slug }) => {

    const siteUrl = ConfigData.SERVER_URL;

    const serverUrl = ConfigData.SERVER;

    const [data, setData] = useState(null);
    const [category, setCategory] = useState();
    const [selectImage, setSelectImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImageId, setSelectedImageId] = useState();
    const [selectedImageValue, setSelectedImageValue] = useState();

    const fetchData = async () => {
        try {
            const res = await fetch(`${siteUrl}events_gallery?slug=${slug}&productions[]=${serverUrl}`);
            if (!res.ok) {
                throw new Error(`Failed to fetch data. Status: ${res.status}`);
            }
            const result = await res.json();
            setData(result);
            setCategory(result[0]['categories'][0]);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const closeSelectedImage = () => {
        setSelectImage(false);
        setSelectedImage(null);
    };

    const openSelectedImage = (photo, index, imageid, imageval) => {
        // console.log(imageid);
        //console.log(imageval)
        setSelectedImageId(imageid)
        setSelectedImageValue(imageval)
        setSelectedImage(photo);
        setSelectedImageIndex(index);
        setSelectImage(true);
        // console.log(selectedImageId)

    };

    const handleNextImage = () => {
        setSelectedImageIndex((prevIndex) => {
            // console.log(selectedImageId)
            if (selectedImageId == 'gallery_2') {
                const galleryArray = data[0].acf.photo_gallery.gallery_2[1];

                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }

            }

            else if (selectedImageId == 'gallery_1') {
                const galleryArray = data[0].acf.photo_gallery.gallery_1[0];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }
            }

            else if (selectedImageId == 'gallery_3') {
                const galleryArray = data[0].acf.photo_gallery.gallery_3[2];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }

            }
            else if (selectedImageId == 'gallery_4') {

                const galleryArray = data[0].acf.photo_gallery.gallery_4[3];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }
            }
            else if (selectedImageId == 'gallery_5') {
                const galleryArray = data[0].acf.photo_gallery.gallery_5[4];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }

            }
            else if (selectedImageId == 'gallery_6') {
                const galleryArray = data[0].acf.photo_gallery.gallery_6[5];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_6 array:', galleryArray);
                    return prevIndex;
                }
            }
            else if (selectedImageId == 'gallery_7') {
                const galleryArray = data[0].acf.photo_gallery.gallery_7[6];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_7 array:', galleryArray);
                    return prevIndex;
                }
            }

            else if (selectedImageId == 'gallery_8') {
                const galleryArray = data[0].acf.photo_gallery.gallery_8[7];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_8 array:', galleryArray);
                    return prevIndex;
                }
            }
            else if (selectedImageId == 'gallery_9') {
                const galleryArray = data[0].acf.photo_gallery.gallery_9[8];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_9 array:', galleryArray);
                    return prevIndex;
                }
            }
            else {
                const galleryArray = data[0].acf.photo_gallery.gallery_10[9];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex + 1) % galleryArray.length;
                    const nextImage = { ...galleryArray[newIndex] };

                    if (nextImage) {
                        setSelectedImage(nextImage);
                        return newIndex;
                    } else {
                        console.error('Invalid next image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_10 array:', galleryArray);
                    return prevIndex;
                }
            }
        });
    };

    const handlePreviousImage = () => {
        setSelectedImageIndex((prevIndex) => {

            if (selectedImageId == 'gallery_2') {
                const galleryArray = data[0].acf.photo_gallery.gallery_2[1];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }
            }

            else if (selectedImageId == 'gallery_1') {
                const galleryArray = data[0].acf.photo_gallery.gallery_1[0];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }
            }
            else if (selectedImageId == 'gallery_3') {
                const galleryArray = data[0].acf.photo_gallery.gallery_3[2];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }
            }
            else if (selectedImageId == 'gallery_4') {
                const galleryArray = data[0].acf.photo_gallery.gallery_4[3];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }
            }

            else if (selectedImageId == 'gallery_5') {
                const galleryArray = data[0].acf.photo_gallery.gallery_5[4];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_5 array:', galleryArray);
                    return prevIndex;
                }
            }

            else if (selectedImageId == 'gallery_6') {
                const galleryArray = data[0].acf.photo_gallery.gallery_6[5];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_6 array:', galleryArray);
                    return prevIndex;
                }
            }
            else if (selectedImageId == 'gallery_7') {
                const galleryArray = data[0].acf.photo_gallery.gallery_7[6];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_7 array:', galleryArray);
                    return prevIndex;
                }
            }

            else if (selectedImageId == 'gallery_8') {
                const galleryArray = data[0].acf.photo_gallery.gallery_8[7];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_8 array:', galleryArray);
                    return prevIndex;
                }
            }

            else if (selectedImageId == 'gallery_9') {
                const galleryArray = data[0].acf.photo_gallery.gallery_9[8];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_9 array:', galleryArray);
                    return prevIndex;
                }
            }

            else {
                const galleryArray = data[0].acf.photo_gallery.gallery_10[9];
                if (Array.isArray(galleryArray) && galleryArray.length > 0) {
                    const newIndex = (prevIndex - 1 + galleryArray.length) % galleryArray.length;
                    const previousImage = { ...galleryArray[newIndex] };

                    if (previousImage) {
                        setSelectedImage(previousImage);
                        return newIndex;
                    } else {
                        console.error('Invalid previous image at index:', newIndex);
                        return prevIndex;
                    }
                } else {
                    console.error('Invalid gallery_10 array:', galleryArray);
                    return prevIndex;
                }
            }
        });
    };

    useEffect(() => {
        if (selectImage) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [selectImage]);

    if (!data || !Array.isArray(data)) {
        return <p>Please wait..</p>;
    }

    return (
        <>
            {category ? (
                <Container>
                    <div>
                        <Row>
                            {data.map((post) => (
                                <>
                                    <Col>
                                        <Col className="pt-5 mb-4">
                                            <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                            <hr className="h-line" style={{ color: "#810400" }} />
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title }}></h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_1[0].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_1', '0')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_1', '0')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>


                                        <Col className="pt-5 mb-4">
                                            {/* <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
                                            {/* <hr className="h-line" style={{ color: "#810400" }} /> */}
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title_2 }}>
                                            </h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_2[1].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{
                                                                    objectFit: 'cover',
                                                                    objectPosition: 'center center'
                                                                }}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_2', '1')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_2', '1')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>


                                        <Col className="pt-5 mb-4">
                                            {/* <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
                                            {/* <hr className="h-line" style={{ color: "#810400" }} /> */}
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title_3 }}>
                                            </h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_3[2].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                                // onClick={() => openSelectedImage(photo, index)}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_3', '2')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_3', '2')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>

                                        <Col className="pt-5 mb-4">
                                            {/* <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
                                            {/* <hr className="h-line" style={{ color: "#810400" }} /> */}
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title_4 }}>
                                            </h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_4[3].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_4', '3')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_4', '3')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>

                                        <Col className="pt-5 mb-4">
                                            {/* <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
                                            {/* <hr className="h-line" style={{ color: "#810400" }} /> */}
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title_5 }}>
                                            </h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_5[4].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_5', '4')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_5', '4')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>

                                        <Col className="pt-5 mb-4">
                                            {/* <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
                                            {/* <hr className="h-line" style={{ color: "#810400" }} /> */}
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title_6 }}>
                                            </h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_6[5].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_6', '5')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_6', '5')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>

                                        <Col className="pt-5 mb-4">
                                            {/* <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
                                            {/* <hr className="h-line" style={{ color: "#810400" }} /> */}
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title_7 }}>
                                            </h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_7[6].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_7', '6')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_7', '6')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>

                                        <Col className="pt-5 mb-4">
                                            {/* <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
                                            {/* <hr className="h-line" style={{ color: "#810400" }} /> */}
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title_8 }}>
                                            </h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_8[7].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_8', '7')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_8', '7')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>

                                        <Col className="pt-5 mb-4">
                                            {/* <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
                                            {/* <hr className="h-line" style={{ color: "#810400" }} /> */}
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title_9 }}>
                                            </h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_9[8].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_9', '8')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_9', '8')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>

                                        <Col className="pt-5 mb-4">
                                            {/* <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> */}
                                            {/* <hr className="h-line" style={{ color: "#810400" }} /> */}
                                            <h1 className="fw-bold" style={{ color: "#810400" }} dangerouslySetInnerHTML={{ __html: post.acf.title_10 }}>
                                            </h1>

                                            <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                                {post.acf.photo_gallery.gallery_10[9].map((photo, index) => (
                                                    <Col key={photo.id} md={3}>
                                                        <Col
                                                            className='p-0 d-lg-block d-none'
                                                            style={{
                                                                marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                                marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                            }}
                                                        >
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                height={212}
                                                                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_10', '9')}
                                                                className='cursor-pointer'
                                                            />
                                                        </Col>

                                                        <Col className='p-0 d-lg-none d-block mt-3'>
                                                            <Image
                                                                src={photo.full_image_url}
                                                                alt=""
                                                                width="100%"
                                                                onClick={() => openSelectedImage(photo, index, 'gallery_10', '9')}
                                                            />
                                                        </Col>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>

                                    </Col>
                                </>
                            ))}
                        </Row>
                    </div>
                </Container>
            ) : (
                <Container>
                    <div>
                        <Row>
                            {data.map((post) => (
                                <>
                                    <Col className="pt-5 mb-4">
                                        <h1 className="fw-bold" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
                                        <hr className="h-line" style={{ color: "#810400" }} />
                                        <Row className='d-flex flex-lg-row flex-column flex-wrap'>
                                            {post.acf.photo_gallery.events_photos[0].map((photo, index) => (
                                                <Col key={photo.id} md={3}>
                                                    <Col
                                                        className='p-0 d-lg-block d-none'
                                                        style={{
                                                            marginTop: `${index % 4 === 0 ? 0 : 40 * (index % 4)}px`,
                                                            marginLeft: `${index % 4 === 0 ? 0 : -50}px`,
                                                        }}
                                                    >
                                                        <Image
                                                            src={photo.full_image_url}
                                                            alt=""
                                                            width="100%"
                                                            height={212}
                                                            style={{ objectFit: 'cover', objectPosition: 'center center' }}
                                                            onClick={() => openSelectedImage(photo, index)}
                                                            className='cursor-pointer'
                                                        />
                                                    </Col>

                                                    <Col className='p-0 d-lg-none d-block mt-3'>
                                                        <Image
                                                            src={photo.full_image_url}
                                                            alt=""
                                                            width="100%"
                                                            onClick={() => openSelectedImage(photo, index)}
                                                        />
                                                    </Col>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                </>
                            ))}
                        </Row>
                    </div>
                </Container>
            )}

            {selectImage && selectedImage && (
                <GalleryPopup
                    selectedImage={selectedImage}
                    closeSelectedImage={closeSelectedImage}
                    handlePreviousImage={handlePreviousImage}
                    handleNextImage={handleNextImage}
                />
            )}
        </>
    );
};

export default Post;