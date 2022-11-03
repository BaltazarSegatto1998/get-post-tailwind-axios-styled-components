import { Post } from '../types/Post';
import { useState, ChangeEvent } from 'react';
import styled from "styled-components";
type Props = {
    data: Post
}

export const PostItem = ({ data }: Props) => {

    const Container = styled.div `
    width: 100%;
    display: grid;
    background-color: #c3c3c3;
    grid-template-columns: 1fr;
    border-radius: 30px;
    `;
    return (
        <Container className="my-4 text-center">
            <h4 className="font-bold">{data.title}</h4>
            <small>#{data.id} - Usuário: {data.userId}</small>
            <p>{data.body}</p>
        </Container>
    );
}