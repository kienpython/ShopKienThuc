import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import axios from 'axios';
import { faPenToSquare, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import style from './Teachers.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(style);
function Teachers() {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:8000/api/teachersAPIViewAll/')
            .then((res) => {
                setTeachers(res.data);
            })
            .catch((error) => {
                console.error('Lỗi', error);
            });
    }, []);
    return (
        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>DataTables</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active">DataTables</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className={cx('card-header', 'row')}>
                                        <h3 className="card-title col-11">Teachers Table</h3>
                                        <button type="button" className={cx('btn btn-success', 'col-1')}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Name</th>
                                                    <th>AccountName</th>
                                                    <th>EmailAddress</th>
                                                    <th>Password</th>
                                                    <th>Infringe</th>
                                                    <th>PhoneNumber</th>
                                                    <th>BankAccountNumber</th>
                                                    <th>Wage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {teachers &&
                                                    teachers.map((teacher, index) => (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{teacher.name}</td>
                                                            <td>{teacher.accountName}</td>
                                                            <td>{teacher.emailAddress}</td>
                                                            <td>{teacher.password}</td>
                                                            <td>{teacher.infringe}</td>
                                                            <td>{teacher.phoneNumber}</td>
                                                            <td>{teacher.bankAccountNumber}</td>
                                                            <td>{teacher.wage}</td>
                                                            <td className="d-flex justify-content-center align-items-center">
                                                                <button type="button" class="btn btn-info">
                                                                    <FontAwesomeIcon icon={faPenToSquare} />
                                                                </button>

                                                                <button type="button" class="btn btn-danger ml-1">
                                                                    <FontAwesomeIcon icon={faTrash} />
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                        <nav aria-label="Page navigation example">
                                            <ul className="pagination pt-2">
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        Previous
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        Next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
        </div>
    );
}

export default Teachers;
