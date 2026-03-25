import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9rem;

  width: 50vw;
  margin-top: 120px;
  margin-left: 25vw;
  margin-right: 25vw;
  padding: 0.9rem;
  padding-right: 1.9rem;
  padding-left: 1.9rem;
  height: 5rem;

  background-image: var(--glass-fill), var(--glass-border);
  box-shadow: var(--column-glass-shadow);
  border: 1px solid var(--border-color);
  border-radius: 1.5rem;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 15vw;
    margin-top: 100px;
    width: 70vw;
    padding-right: 3rem;
    padding-left: 1rem;
    height: 4.5rem;
}
  @media (max-width: 390px) {
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 100px;
    width: 96vw;
    padding-right: 2rem;
    padding-left: 1rem;
    height: 4.5rem;
    border-radius: 0.9rem;
}
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  gap: 10px;

  color: var(--text-color);
  flex-basis: 100%;

  @media (max-width: 768px) {
  font-size: 1rem;
  margin: 0;

}
  @media (max-width: 440px) {
  display: none;
}
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 20rem;
  min-width: 4.5rem;
  gap: 0;

  @media (max-width: 768px) {
    margin-inline: 3%;
    width: 94%;
  }

  @media (max-width: 460px) {
    padding-inline: 2%;
    margin-inline: 0;
    width: 96%;
  }
`;

export const Label = styled.label`
  padding-left: 0.2rem;
  font-size: 1rem;
  color: var(--text-color);

  @media (max-width: 768px) {
    padding-left: 0.1rem;
    font-size: 0.8rem;
}
  @media (max-width: 460px) {
    padding-left: 0.6rem;
}
`;

export const Select = styled.select`
  padding: 0.4rem 0.75rem;
  width: 100%;
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  background-color: var(--card-bg);
  color: var(--text-color);
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;

  &:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
    border-color: var(--primary-color);
    transform: translateY(-1px);
  }

  option {
    background-color: var(--card-bg);
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    width: 140%;
}

  @media (max-width: 460px) {
    width: 120%;
}
`;
