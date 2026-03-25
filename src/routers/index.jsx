import React, {Suspense, lazy} from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';


const Home = lazy(() => import ('../pages/Home'));
const Login = lazy(() => import ('../pages/Login'));
const Relatorios = lazy(() => import ('../pages/Relatorios/index'));
const GestaoFuncionarios = lazy(() => import ('../pages/GestaoFuncionarios'));
const NotFound = lazy(() => import ('../pages/NotFound'));


export const Routers = ({ searchTerm = '' }) => {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <Routes>

                <Route path="/" element={<Login />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />
                </Route>

                <Route element={<ProtectedRoute allowedRoles={['ADMINISTRADOR', 'SUPERVISOR']} />}>
                    <Route path="/relatorios" element={<Relatorios />} />
                    <Route path="/gestao-funcionarios" element={<GestaoFuncionarios />} />
                </Route>

                <Route path="*" element={<NotFound />} />

            </Routes>
        </Suspense>
    );
};