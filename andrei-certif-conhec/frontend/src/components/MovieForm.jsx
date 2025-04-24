import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './MovieForm.css'

const MovieForm = ({ movieToEdit, onSubmit, onCancel }) => {
    const [movie, setMovie] = useState({
        id: uuidv4(),
        name: '',
        synopsis: '',
        year: new Date().getFullYear(),
        cover: null,
        trailerLink: ''
    });

    const [preview, setPreview] = useState('');

    useEffect(() => {
        if (movieToEdit) {
            setMovie({
                ...movieToEdit,
                year: movieToEdit.year || new Date().getFullYear()
            });
            if (movieToEdit.cover) {
                setPreview(movieToEdit.cover);
            }
        }
    }, [movieToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMovie(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                setMovie(prev => ({
                    ...prev,
                    cover: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(movie);
    };

    return (
        <div className="movie-form-container">
            <h2>{movieToEdit ? 'Editar Filme' : 'Adicionar Novo Filme'}</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome do Filme*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={movie.name}
                        onChange={handleChange}
                        required
                        maxLength="100"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="synopsis">Sinopse*</label>
                    <textarea
                        id="synopsis"
                        name="synopsis"
                        value={movie.synopsis}
                        onChange={handleChange}
                        required
                        rows="4"
                        maxLength="500"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="year">Ano de Lançamento*</label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        value={movie.year}
                        onChange={handleChange}
                        required
                        min="1900"
                        max={new Date().getFullYear() + 5}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="trailerLink">Link do Trailer*</label>
                    <input
                        type="url"
                        id="trailerLink"
                        name="trailerLink"
                        value={movie.trailerLink}
                        onChange={handleChange}
                        required
                        placeholder="https://www.youtube.com/watch?v=..."
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cover">Capa do Filme</label>
                    <input
                        type="file"
                        id="cover"
                        name="cover"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    {preview && (
                        <div className="image-preview">
                            <img src={preview} alt="Preview da capa" style={{ maxWidth: '200px', maxHeight: '300px' }} />
                        </div>
                    )}
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-btn">
                        {movieToEdit ? 'Atualizar' : 'Salvar'}
                    </button>
                    <button type="button" onClick={onCancel} className="cancel-btn">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MovieForm;