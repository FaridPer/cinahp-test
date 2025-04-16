import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import './syp.css';

const FormComponent = () => {
  const [formConfig, setFormConfig] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Incluye reset aquí

  useEffect(() => {
    const fetchFormConfig = async () => {
      try {
        const res = await fetch('/api/forms/1');
        if (!res.ok) {
          throw new Error('Error al cargar el formulario');
        }
        const data = await res.json();
        setFormConfig(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFormConfig();
  }, []);

  const onSubmit = useCallback(async (data) => {
    try {
      const dataToSend = Object.entries(data).map(([name, value]) => ({ field: name, value }));
      const formID = '1';

      const res = await fetch('/api/form-submissions', {  // Corregí la URL de la API aquí
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form: formID, submissionData: dataToSend }),
      });

      if (!res.ok) throw new Error('Error al enviar el formulario');

      const result = await res.json();
      alert('Formulario enviado con éxito');
      
      reset(); // Limpiar el formulario después de enviar con éxito
      
      if (result.redirect) router.push(result.redirect.url);
    } catch (err) {
      alert('Error al enviar el formulario: ' + err.message);
    }
  }, [router, reset]); // Añadí reset en las dependencias

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      {formConfig.fields.map((field) => (
        <div
          className={`form-div ${field.width === 50 ? "half-width" : ""}`} 
          key={field.name}
          style={{ width: field.width ? `${field.width}%` : '100%' }}
        >
          <label className="label-grande">{field.label}</label>
          <input
            type={field.blockType}
            {...register(field.name, { required: field.required })}
            defaultValue={field.defaultValue}
          />
          {errors[field.name] && <p className="error">Este campo es obligatorio</p>}
        </div>
      ))}
      <button className="btn-enviar" type="submit">Enviar</button>
    </form>
  );
};

export default FormComponent;
