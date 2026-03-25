import React from "react";
import { Container, Title, FilterGroup, Label, Select } from "./styles";
import { IoFilter } from "react-icons/io5";

const HomeFilter = ({
  status,
  setStatus,
  prioridade,
  setPrioridade,
  responsavelId,
  setResponsavelId,
  colaboradores,
}) => {
  return (
      <Container>
        <Title id="filters-title"> <IoFilter aria-hidden="true" /> Filtros:</Title>

        <FilterGroup role="group" aria-labelledby="filters-title">
          <Label htmlFor="status">Status:</Label>
          <Select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            aria-label="Filtrar por status"
          >
            <option value="">Todos</option>
            <option value="planejada">Planejada</option>
            <option value="a_fazer">A Fazer</option>
            <option value="em_andamento">Em Andamento</option>
            <option value="pausada">Pausada</option>
            <option value="concluida">Concluída</option>
          </Select>
        </FilterGroup>

        <FilterGroup role="group" aria-labelledby="filters-title">
          <Label htmlFor="prioridade">Prioridade:</Label>
          <Select
            id="prioridade"
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
            aria-label="Filtrar por prioridade"
          >
            <option value="">Todas</option>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
          </Select>
        </FilterGroup>

        <FilterGroup role="group" aria-labelledby="filters-title">
          <Label htmlFor="responsavel">Responsável:</Label>
          <Select
            id="responsavel"
            value={responsavelId}
            onChange={(e) => setResponsavelId(e.target.value)}
            aria-label="Filtrar por responsável"
          >
            <option value="">Todos</option>
            {colaboradores.map((colaborador) => (
              <option key={colaborador.id} value={colaborador.id}>
                {colaborador.nomeCompleto}
              </option>
            ))}
          </Select>
        </FilterGroup>
      </Container>    
  );
};

export default HomeFilter;


