import React from 'react';
import Head from 'next/head';

interface CommonHead {
    children?: any;
    title: string;
    description: string;
}

export default function CommonHeadComponent({ children, ...props }: CommonHead) {
    return (
        <Head>
            <meta id="custom-viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, user-scalable=no" />

            <title>{ props.title }</title>
            <meta name="description" content={props.description} />

            <meta name="Copyright" content="github.jaekwangLee" />
            <meta name="author" content="websterking" />
            <meta name="image" content="" />
            <link rel="shortcut icon" href="" />
            <link rel="apple-touch-icon-precomposed" href="" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            {/* font */}
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />  
            
            { children }
        </Head>
    )
}