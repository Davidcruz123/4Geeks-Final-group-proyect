"""empty message

Revision ID: b13477303960
Revises: 710ec8370d62
Create Date: 2021-03-10 21:09:33.380505

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b13477303960'
down_revision = '710ec8370d62'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('medicamentos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre_comercial', sa.Text(), nullable=False),
    sa.Column('principio_activo', sa.String(length=120), nullable=False),
    sa.Column('presentaciones', sa.String(length=120), nullable=False),
    sa.Column('marcas_comerciales', sa.String(length=120), nullable=False),
    sa.Column('respuesta_1', sa.Text(), nullable=False),
    sa.Column('respuesta_2', sa.Text(), nullable=False),
    sa.Column('respuesta_3', sa.Text(), nullable=False),
    sa.Column('respuesta_4', sa.Text(), nullable=False),
    sa.Column('respuesta_5', sa.Text(), nullable=False),
    sa.Column('respuesta_6', sa.Text(), nullable=False),
    sa.Column('respuesta_7', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('principio_activo')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('medicamentos')
    # ### end Alembic commands ###
