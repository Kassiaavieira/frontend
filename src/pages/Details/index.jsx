import { useState, useEffect } from "react"
import { Container, Content } from "./styles"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover o job?");

    if (confirm) {
      await api.delete(`/job/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchJob() {
      const response = await api.get(`/job/${params.id}`)
      setData(response.data);
    }

    fetchJob()
  },[]);

  return (
    <Container>
      <Header />

      {
        data && // essa condição diz, se existir conteúdo, mostre o data, se não , não mostre nada 
        <main>
          <Content>
            <ButtonText
              title="Excluir o Job" 
              isActive
              onClick={handleRemove} 
            />

            <h1>
              {data.title}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.tags &&
              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag 
                      key={String(tag.id)}
                      title={tag.name} 
                    />
                  ))
                }
              </Section>
            }

            <Button 
              title="Voltar"
              onClick={handleBack}
            />
        </Content>
        </main>
      }
    </Container>
  )
}