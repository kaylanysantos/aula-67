import {useForm} from "react-hook-form";
import { Controller } from "react-hook-form";
import {Typography, Layout, Form, Input, Button} from "antd";
import IClass from "../interfaces/IClass";
const {Title} = Typography;
const {Content} = Layout;
const {Item} = Form;

function CreateClass () {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Partial<IClass>>();
    
      const onSubmit = (data: Partial<IClass>) => {
        console.log("Dados enviados: ", {
          ...data,
          capacity: Number(data.capacity),
          hour: String(data.hour),
        });
      };

    return (
        <Content>
        <Title level={2}>Criar nova turma</Title>
        <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
          <Item
          label="Nome do curso"
          name="name"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: "Nome obrigatório" }}
              render={({field})=> <Input {...field}/>}
            />
          </Item>

          <Item>
            <Input
              label= "nome da sala"
              name="room"
              validateStatus={errors.name ? "error" : ""}
              render={(field) => <Input {...field}/>}
            />
             <Controller
              name="name"
              control={control}
              rules={{ required: "Sala obrigatório" }}
              render={(field)=> <Input {...field}/>}
            />
            {errors.room && <p>{errors.room.message}</p>}
          </Item>

          <Item>
            <label htmlFor="capacity">Capacidade máxima</label>
            <input
              type="number"
              id="capacity"
              {...register("capacity", { required: "Capacidade obrigatória" })}
            />
            {errors.capacity && <p>{errors.capacity.message}</p>}
          </Item>

          <fieldset>
            <label htmlFor="day">Dia</label>
            <input
              type="text"
              id="day"
              {...register("day", { required: "Dia obrigatório" })}
            />
            {errors.day && <p>{errors.day.message}</p>}
          </fieldset>

          <fieldset>
            <label htmlFor="hour">Hora</label>
            <input
              type="time"
              id="hour"
              {...register("hour", { required: "Hora obrigatória" })}
            />
            {errors.hour && <p>{errors.hour.message}</p>}
          </fieldset>

          <Button htmlType="submit">Criar</Button>
        </Form>
        
      </Content>
    )
}
export default CreateClass;