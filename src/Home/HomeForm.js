import React, { Component } from "react";
import styled from "styled-components";

const HomeForm = () => (
  <Form>
    <Label htmlFor="handle">Whose followers do you want:</Label>
    <Input type="text" name="handle" />
    <Submit>Get me some data</Submit>
  </Form>
);

export default HomeForm;

const Form = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 0;
`;

const Label = styled.label`
  font-size: 1.5em;
  padding: 1rem;
  text-align: center;
`;

const Input = styled.input`
  border: 1px solid var(--grey);
  font: var(--primary-font);
  font-size: 1.2em;
  width: 70%;
`;

const Submit = styled.button`
  background-color: var(--yellow);
  border-radius: 25px;
  font: var(--primary-font);
  font-size: 1.2em;
  margin: 1rem;
  padding: 0.7em 1rem;
  text-transform: uppercase;
`;
