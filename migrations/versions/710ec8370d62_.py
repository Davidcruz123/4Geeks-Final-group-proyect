"""empty message

Revision ID: 710ec8370d62
Revises: 
Create Date: 2021-03-09 21:15:51.154936

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '710ec8370d62'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('usuarios',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=120), nullable=False),
    sa.Column('code', sa.Integer(), nullable=True),
    sa.Column('Cedula', sa.String(length=120), nullable=True),
    sa.Column('Edad', sa.String(length=120), nullable=True),
    sa.Column('Fecha_Nacimiento', sa.String(length=120), nullable=True),
    sa.Column('Telefono_Usuario', sa.String(length=120), nullable=True),
    sa.Column('Nombre_Cuidador', sa.String(length=120), nullable=True),
    sa.Column('Telefono_Cuidador', sa.String(length=120), nullable=True),
    sa.Column('Peso_Usuario', sa.String(length=120), nullable=True),
    sa.Column('Altura_Usuario', sa.String(length=120), nullable=True),
    sa.Column('Profesion', sa.String(length=120), nullable=True),
    sa.Column('Medicamentos_Actuales', sa.String(length=240), nullable=True),
    sa.Column('Enfermedades', sa.String(length=120), nullable=True),
    sa.Column('Alergias_Medicamentosas_Alimenticias', sa.String(length=240), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('Cedula'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('usuarios')
    # ### end Alembic commands ###