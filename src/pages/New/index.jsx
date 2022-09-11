import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { JobItem } from '../../components/JobItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

import { Container, Form } from './styles';

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  const [loading, setLoading] = useState(false);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewJob() {
    if (!title) {
      return alert("Digite o título do Job");
    }

    if (newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio");
    }

    setLoading(true);

    await api.post("/job", {
      title,
      description,
      tags
    });

    alert("Job criado com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Job</h1>
            <Link to="/" >
              voltar
            </Link>
          </header>

          <Input
            placeholder="Título do job" 
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea 
            placeholder="Observações" 
            onChange={e => setDescription(e.target.value)}
          />

          <Section title="Marcadores">
            <div className='tags'>
              {
                tags.map((tag, index) => (
                  <JobItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <JobItem 
                isNew 
                placeholder="Novo Marcador"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>
          <Button
            disabled={loading}
            title={loading ? 'Salvando' : 'Salvar'}
            onClick={handleNewJob}
          />
        </Form>
      </main>
    </Container>
  )
}