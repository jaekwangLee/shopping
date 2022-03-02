import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Modal from 'react-modal';

import axios from '@libs/core/axios';
import { RootContainer } from '@components/common/Container';
import Head from '@components/layout/Head'

export default function PageContainer(props: any) {
    const [init, setInit] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        Modal.setAppElement('#view-dom');
    }, [])

    useEffect(() => {
        // axios.get('/auth/isAuthorized').then(result => {
        //     const { data } = result;

        //     if (data && data.status === 'success') {
        //         setLoginStatus(true);
        //         setUser(data.data);
        //     }
            
        //     setInit(true)
        // });
        setInit(true)
    }, [])

    return (
        <RootContainer id='view-dom'>
            <Head 
                title={props.title || '허가네 농산품'}
                description={props.description}
            />
            <NextSeo
                openGraph={{
                    type: 'website',
                    url: 'https://h-green.com',
                    title: props.title || '허가네 농산품',
                    description: props.description,
                    images: [{
                        url: 'https://s3.ap-northeast-2.amazonaws.com/photos.pitchit/kakao_preview.png',
                        width: 800,
                        height: 600,
                        alt: 'pitchit.org preview'
                    }]
                }}
            />
        {
            init &&
            React.cloneElement(props.children, { loginStatus, user })
        }
        </RootContainer>
    )
}